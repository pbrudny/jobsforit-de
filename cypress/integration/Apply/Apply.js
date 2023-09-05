import { Given, Before, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  cy.viewport(1280, 1060);
});

Given('I am on the main page', () => {
  cy.visit('/')
});

Given('jobs are filtered by tech and city', () => {
  cy.get('button[value=Python]').click();
  cy.get('button[value=Paris]').click();
});

Given('I am on the comparison view', () => {
  cy.visit('/');
  cy.contains('Senior Software Engineer (Python/Django)').click();
});

Given('I am on the job details view', () => {
  cy.visit('/');
  cy.contains('Senior Software Engineer (Python/Django)').click();
});

Given('I try to load job from url', () => {
  cy.visit('/jobs/senior-software-engineer-python-backmarket-1sGCM2yo87SNF8FGKRWChW')
});

When('I click on the job item', () => {
  cy.contains('Senior Software Engineer (m/w/d)').click();
});

When('I click apply button', () => {
  cy.contains('Apply').click();
});

Then('I should see success modal', (term) => {
  cy.contains('Good luck!');
});
