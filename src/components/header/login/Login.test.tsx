import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Login from "./Login";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Login component", () => {
  test("submits form with username and password", async () => {
    const saveJwt = jest.fn();
    const mockedResponse = { data: "jwt_token" };
    mockedAxios.mockResolvedValueOnce(mockedResponse);

    const { getByLabelText, getByText } = render(<Login saveJwt={saveJwt} />);

    const usernameInput = getByLabelText("Username");
    const passwordInput = getByLabelText("Password");
    const loginButton = getByText("Login");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(saveJwt).toHaveBeenCalledWith("jwt_token");
      expect(axios).toHaveBeenCalledWith({
        method: "POST",
        url: "http://localhost:3000/login",
        data: {
          username: "testuser",
          password: "testpassword",
        },
      });
    });
  });
});
