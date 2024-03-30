import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("renders learn react link", () => {
  //   mockedAxios.post.mockImplementation(() =>
  //     Promise.resolve({ data: "eyasdasd.asdasd.adasd" })
  //   );
  //   render(
  //     <Login
  //       saveJwt={() => {
  //         return "asd";
  //       }}
  //     />
  //   );
  /* const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); */
});
