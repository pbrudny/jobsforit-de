describe("About page", () => {
  it('loads the page', () => {
    cy.viewport(1280, 1060);

    cy.visit('/about');
    cy.contains('Hello World');
  });
});
