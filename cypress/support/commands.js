Cypress.Commands.add("start", () => {
  cy.visit("/");
});

Cypress.Commands.add("initTestsWithLogin", () => {
  cy.viewport(1152, 660);
  //cy.log("Given that I am an Apollo Admin");
  // cy.setCookie('user', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyZWMxOGRkLTYxODQtNDZiMy1iZjIxLTY2ZGU0ZWY2YjExYSIsImVudGl0eUlkIjoiYjE1ZWY3YjAtYjYyYi00ZjY1LWE5MzctNGU1YTQ2NTUzYmRmIiwidHlwZSI6InNtZSIsImlhdCI6MTYyMTYxMzIyOCwiZXhwIjoxNjIxNjk5NjI4fQ.R_rg6o9p3LApHkkinR_0mIHsI0CAEmT4NQdDGm8Ql_o')
  // do i need to put a stub for the user details here?

  cy.log("Given that I am in home page");
  cy.visit("/");
  cy.contains("Login");
  cy.login();
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
