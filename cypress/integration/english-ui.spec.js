describe("Jobs list", () => {
  it('displays UI in english', () => {
    cy.viewport(1280, 1060);
    cy.visit('/');
    // console.log('env1: ',Cypress.env('REACT_APP_LANGUAGE'))
    // cy.contains( Cypress.env('REACT_APP_LANGUAGE') === 'fr' ? 'À propos' : 'About');
    cy.contains( 'About');
  });
});
