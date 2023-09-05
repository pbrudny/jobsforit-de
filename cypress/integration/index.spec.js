describe("Jobs list", () => {
  it('displays on js jobs', () => {
    cy.viewport(1280, 1060);
    cy.visit('/');
    cy.contains('About');
  });
});
