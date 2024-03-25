import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("renders learn react link", () => {
  render(
    <Login
      saveJwt={() => {
        return "asd";
      }}
    />
  );
  /* const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); */
});
