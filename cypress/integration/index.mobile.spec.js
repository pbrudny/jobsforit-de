describe("Jobs list mobile", () => {
  context('Iphone-6', () => {
    beforeEach(() => {
      cy.viewport('iphone-6')
      cy.visit('/');
    })

    it('displays mobile jobs', () => {
      cy.contains('New');
      cy.contains('Edit filters');
      cy.contains('Feedback');
      cy.get('[data-cy=job]').its('length').should('be.gte', 100)
    });
  });
});
