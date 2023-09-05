import { Given, Before, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Before( () => {
  cy.viewport(1280, 1060);

});

Given('I am on the main page', () => {
  cy.visit('/')
});

Then('I should see all jobs', (term) => {
  cy.get('[data-cy=job]').its('length').should('be.gte', 60)
});
