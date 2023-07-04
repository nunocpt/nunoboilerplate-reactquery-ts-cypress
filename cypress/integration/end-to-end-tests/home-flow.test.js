import listMock from "../../fixtures/products.json";

context("Homepage (non logged in user) flow", () => {
  beforeEach(() => {
    cy.viewport(1152, 660);

    cy.log("Given that I'm on Homepage page");
    cy.visit("/");
  });

  it("I can see the banner", () => {
    cy.contains("Home page");
    cy.contains("Check out our amazing store!");
  });

  it("I can see the products", () => {
    cy.get("[data-cy=\"products-details-wrapper\"]").each(
      (element, index, list) => {
        cy.log("I check if this Productcard data matches the mock");
        cy.get(element)
          .find("[data-cy=\"product-image\"]")
          .should("have.attr", "src");
        cy.get(element)
          .find("[data-cy=\"product-title\"]")
          .should("contain.text", listMock[index].title);
        cy.get(element)
          .find("[data-cy=\"product-description\"]")
          .should("contain.text", listMock[index].description);
      }
    );
  });

  it("I can add a product to my cart", () => {
    cy.get("[data-cy=\"add-to-cart\"]").first().click();
    cy.contains("Product added!");
  });

  it("I can see product details page", () => {
    cy.get("[data-cy=\"view-more\"]").first().click();
    cy.url().should("include", "/products/1");
    cy.contains("Iron Man");
  });
});
