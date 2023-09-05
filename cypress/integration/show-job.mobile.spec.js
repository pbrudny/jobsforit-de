describe("Show job", () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.visit('/');
  })

  it('displays full details of the job', () => {
    cy.contains('Full Stack Developer (m/w/d)').click();
    cy.contains('Swipe to see other offers!');
    cy.contains('Apply');
    cy.contains('Must have');
    cy.contains('Job Description');
    cy.contains('Flexible working hours');
    cy.contains('Attractive location');
  });
});
