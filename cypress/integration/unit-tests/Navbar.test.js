// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import Navbar from "components/layout/Navbar";
import { BrowserRouter } from "react-router-dom";

it("renders the navbar", () => {
  cy.mount(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  cy.get("[data-cy=\"marvel-logo\"]").should(([img]) => {
    expect(img.naturalWidth).equal(2000);
    expect(img.naturalHeight).equal(447);
  });

  cy.get("[data-cy=\"cart-btn\"]").contains("Cart");
});
