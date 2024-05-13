import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LayoutCarrousel from "./Carrousel";

test("renders learn react link", () => {
  const { getByAltText, getByRole, getByText } = render(
    <LayoutCarrousel imageName="t-shirt" />
  );

  const labelText = getByRole("heading", { name: /title/i });
  const tshirtImg = getByRole("img", { name: /t-shirt/i });
  const altText = getByAltText("t-shirt");

  expect(tshirtImg).toHaveProperty("src");
  expect(altText).toHaveProperty("alt", "t-shirt");

  expect(labelText).toHaveAttribute("aria-label", "title");
});
