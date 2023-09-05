describe("Jobs list", () => {
  xit('displays UI in french', () => {
    cy.viewport(1280, 1060);
    cy.visit('/');
    cy.contains('À propos');
  });
});
