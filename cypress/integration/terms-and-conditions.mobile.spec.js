describe("T&C page mobile", () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.visit('/')
  })

  it('loads the T&C and go back', () => {
    cy.get('.hamburger-button__button').click();
    cy.get('[data-test=nav-link]').contains('Terms & Conditions').click().then(
      ()=>{
        cy.contains('General Terms and Conditions');
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
