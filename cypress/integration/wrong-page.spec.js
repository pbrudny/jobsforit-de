describe("Wrong page", () => {
  it('displays on js jobs', () => {
    cy.viewport(1280, 1060);

    cy.visit('/bad-address');
    cy.contains('Page not found');
  });
});
