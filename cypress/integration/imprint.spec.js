describe("Imprint page", () => {
  it('loads the page', () => {
    cy.viewport(1280, 1060);
    cy.visit('/');
    cy.contains('Imprint').click()
    cy.contains('Information pursuant to § 5 TMG');
  });
});
