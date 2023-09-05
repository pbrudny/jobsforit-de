describe("Privacy policy page mobile", () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.visit('/')
  })

  it('loads the privacy policy and go back', () => {
    cy.get('.hamburger-button__button').click();
    cy.get('[data-test=nav-link]').contains('Privacy Policy').click().then(
      ()=>{
        cy.contains('An overview of data protection');
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
