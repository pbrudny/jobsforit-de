import { Given, Before, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  cy.viewport(1280, 1060);
});

Given('I am on the main page', () => {
  cy.visit('/')
});

When('select the React filter', () => {
  cy.get('button[value=React]').click();
});

When('select the Angular filter', () => {
  cy.get('button[value=Angular]').click();
});

When('select the JS filter', () => {
  cy.get('button[value=JS]').click();
});

When('select the other filter', () => {
  cy.get('button[value=Autres]').click();
});

When('I hover over dropdown', () => {
  cy.get('[data-cy=techDropdown]').click();
});

When('I move the bottom salary slider to 100k', () => {
  cy.get('[data-cy=salarySlider]').find('.ant-slider-handle-1')
    // .trigger('mousedown', { which: 1 })
    // .trigger('mousemove',  { PositionX: 40, which: 1 })
    // .trigger('mouseup')
  //aria-valuenow="90000"
  //   .invoke('aria-valuenow', 100000)
    .invoke('val', 100000)
    .trigger('change')
});

Then('I should only see the jobs over 100k', (term) => {
  cy.get('[data-cy=job]').should('have.length', 6);
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
