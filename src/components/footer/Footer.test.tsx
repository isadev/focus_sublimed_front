import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders learn react link", () => {
  render(<Footer />);
  const informationSection = screen.getByRole("heading", {
    name: /information/i,
  });
  const contactUsImg = screen.getByRole("img", { name: /contactUs/i });
  const facebookLink = screen.getByRole("link", { name: /facebook/i });

  expect(facebookLink).toHaveProperty(
    "href",
    "https://facebook.com/focus_sublimed"
  );

  expect(contactUsImg).toBeInstanceOf(Image);

  expect(informationSection).toBeInTheDocument();
});
