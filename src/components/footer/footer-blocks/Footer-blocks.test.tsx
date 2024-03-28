import React from "react";
import { render, screen } from "@testing-library/react";
import FooterBlocks from "./Footer-blocks";

test("renders learn react link", () => {
  const labels = [
    {
      text: "My order",
    },
    {
      text: "Refund",
    },
    {
      text: "Returns",
    },
    {
      text: "FAQ",
    },
  ];
  render(<FooterBlocks sectionTitle="Information" labels={labels} />);
  /* const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); */
});
