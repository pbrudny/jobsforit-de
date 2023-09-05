describe("Privacy policy page", () => {
  it('loads the page', () => {
    cy.viewport(1280, 1060);

    cy.visit('/privacy-policy');
    cy.contains('An overview of data protection');
  });
});
