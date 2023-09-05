describe("Imprint page mobile", () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.visit('/')
  })

  it('loads the imprint and go back', () => {
    cy.get('.hamburger-button__button').click();
    cy.get('[data-test=nav-link]').contains('Imprint').click().then(
      ()=>{
        cy.contains('Information pursuant to § 5 TMG');
      }
    );
    cy.get('.hamburger-button__button').click();
    cy.get('[data-test=nav-link]').contains('Home').click().then(
      ()=>{
        cy.contains('Edit filters');
      }
    );
  });
});
