import { Given, Before, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  cy.viewport('iphone-6');
});

Given('I am on the filter page', () => {
  cy.visit('/');
  cy.contains('Edit filters').click();
});

When('I select the React filter', () => {
  cy.get('button[value=React]').click();
});

When('I select the Angular filter', () => {
  cy.get('button[value=Angular]').click();
});

When('I select the JS filter', () => {
  cy.get('button[value=JS]').click();
});

When('I select the other filter', () => {
  cy.get('button[value=Autres]').click();
});

When('I press filter jobs button', () => {
  cy.contains('Filter jobs').click();
});

Then('I should see the React jobs', (term) => {
  cy.contains('Frontend Engineer (React)');
  cy.contains('Javascript Fullstack Dev (Serverless GraphQL & React)');
});

Then('I should see the other jobs', (term) => {
  cy.contains('Dart / Flutter Developer (m/f/x)');
});

Then('I should not see the React jobs', (term) => {
  cy.get('Frontend Engineer (React)').should('have.length', 0);
  cy.get('Javascript Fullstack Dev (Serverless GraphQL & React)').should('have.length', 0);
});

Then('I should not see the JQuery jobs', (term) => {
  cy.get('Senior Developer Frontend').should('have.length', 0);
});