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

Given('I try to load job from broken url', () => {
  cy.visit('/jobs/siki')
});

When('I click on the job item', () => {
  cy.contains('Senior Software Engineer (Python/Django)').click();
});

Then('there should be no filters selected', (term) => {
  cy.get('[data-cy=techButton-unpressed]').should('have.length', 0)
  cy.get('[data-cy=cityButton-unpressed]').should('have.length', 0)
});

Then('I should see tech and city filter selected', (term) => {
  cy.get('[data-cy=techButton-pressed]').should('have.length', 1)
  cy.get('[data-cy=cityButton-pressed]').should('have.length', 1)
});

Then('I should see the comparison view', (term) => {
  cy.contains('Apply');
  cy.contains('Must have');
  cy.get('[data-cy=job]').its('length').should('be.gte', 3)
});

Then('I should see the job details on the right', (term) => {
  cy.contains('Apply');
  cy.contains('Must have');
  cy.contains('Description du poste');
  cy.contains('Flexible working hours');
  cy.contains('Free coffee');
});

Then('I should see filtered jobs on the left', (term) => {
  cy.get('[data-cy=job]').its('length').should('be.lte', 50)
  cy.get('[data-cy=job]').its('length').should('be.gte', 3)
});

Then('I should see some jobs on the left', (term) => {
  cy.get('[data-cy=job]').its('length').should('be.lte', 50)
  cy.get('[data-cy=job]').its('length').should('be.gte', 3)
});

Then("I should see the 'Page not found' message", (term) => {
  cy.contains('Page not found');
});