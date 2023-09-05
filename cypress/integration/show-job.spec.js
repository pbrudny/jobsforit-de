describe("Show job", () => {
  beforeEach(() => {
    cy.viewport(1280, 1060);
    cy.visit('/');
    cy.contains('Full Stack Developer (m/w/d)').click();
  })

  it('filters jobs on the left', () => {
    cy.contains('Attractive location');
  });

  it('displays full details of the job', () => {
    cy.contains('Apply');
    cy.contains('Must have');
    cy.contains('Job Description');
    cy.contains('Flexible working hours');
    cy.contains('Attractive location');
  });
});
