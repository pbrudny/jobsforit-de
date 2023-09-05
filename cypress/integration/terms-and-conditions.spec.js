describe("Terms and conditions page", () => {
  it('loads the page', () => {
    cy.viewport(1280, 1060);

    cy.visit('/terms-and-conditions');
    cy.contains('General Terms and Conditions');
  });
});
