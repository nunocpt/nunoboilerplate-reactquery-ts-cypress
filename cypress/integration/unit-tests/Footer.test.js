// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import Footer from "components/layout/Footer";

it("renders the footer", () => {
  cy.mount(<Footer />);
  cy.get("p").contains(
    "© MarvelStudios Management, Inc. 2022 All Rights Reserved."
  );
});
