import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { loginApi } from "../../api/user";

jest.mock("../../api/user");
import Login from "./Login";

jest.mock("axios");

describe("Login component", () => {
  test("submits form with username and password", async () => {
    const saveJwt = jest.fn();
    const mockedResponse = { data: { autorhization: "jwt_token" } };
    const loginMock = loginApi as jest.Mock;
    loginMock.mockResolvedValue(mockedResponse.data.autorhization);

    const { getByLabelText, getByText } = render(<Login saveJwt={saveJwt} />);

    const usernameInput = getByLabelText("Username");
    const passwordInput = getByLabelText("Password");
    const loginButton = getByText("Login");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(saveJwt).toHaveBeenCalledWith("jwt_token");
    });
  });
});
