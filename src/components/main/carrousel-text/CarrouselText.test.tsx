import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CarrouselText from "./CarrouselText";

test("renders learn react link", () => {
  const { getByAltText, getByRole, getByText } = render(
    <CarrouselText
      title="Diseña tu camisa"
      subtitle="Conviertete en alguien con diseños únicos"
      buttons={[{ type: "login" }, { type: "cotizacion" }]}
      styles={{ position: "absolute", color: "white", sub_color: "purple" }}
    />
  );

  const labelText = getByRole("heading", { name: /title/i });
  const loginBtn = getByRole("button", { name: /login-btn/i });
  const cotizacionBtn = getByRole("button", { name: /user-request-btn/i });

  expect(loginBtn).toHaveAttribute("aria-haspopup", "true");
  expect(cotizacionBtn).toBeDefined();
  expect(labelText).toHaveAttribute("aria-label", "title");
});
