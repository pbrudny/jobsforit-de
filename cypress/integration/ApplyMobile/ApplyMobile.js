import { Given, Before, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Before( () => {
  cy.viewport('iphone-6');
});

Given('I am on the main page', () => {
  cy.visit('/')
});

Given('jobs are filtered by tech and city', () => {
  cy.contains('Edit filters').click();
  cy.get('button[value=Python]').click();
  cy.get('button[value=Paris]').click();
  cy.contains('Filter jobs').click();
  cy.contains('Edit filters');
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
  cy.contains('Senior Software Engineer (Python/Django)').click();
});

When('I swipe to the right', (term) => {
  cy.get('[data-cy=jobMobileDetails]')
    .trigger('mousedown', { which: 1 }) // start capture
    .trigger('mousemove', 'left') // register start position
    .trigger('mousemove', 'right') // register end position
    .wait(0) // wait for requestAnimationFrame to invoke fireOnMove
    .trigger('mouseup'); // end capture
});

When('I swipe to the left', (term) => {
  cy.get('[data-cy=jobMobileDetails]')
    .trigger('mousedown', { which: 1 }) // start capture
    .trigger('mousemove', 'right') // register end position
    .trigger('mousemove', 'left') // register start position
    .wait(0) // wait for requestAnimationFrame to invoke fireOnMove
    .trigger('mouseup'); // end capture
});

When('I click apply button', () => {
  cy.contains('Apply').click();
});

Then('I should see success modal', (term) => {
  cy.contains('Good luck!');
});
