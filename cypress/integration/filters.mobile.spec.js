describe("Tech filters", () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
  })

  context('from url', () => {
    it('displays on js jobs', () => {
      cy.visit('/filters/js');
      cy.contains('Full Stack Developer (m/w/d)');
    });

    it('filters remote jobs', () => {
      cy.visit('/filters/all/remote');
      cy.contains('Lead Front-End Engineer');
    });

    it('filter given job', () => {
      cy.visit('/jobs/technischer-redakteur-enco-1MNxB8KZbTHs05i6QT87cU');
      cy.contains('Technischer Redakteur (m/w)');
      cy.contains('Erstellung und Pflege der Benutzerdokumentation');
    });
  })
});

describe('City filters', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
  })

  context('click city buttons', () => {
    it('displays jobs in Cologne', () => {
      cy.visit('/');
      cy.contains('Edit filters').click();
      cy.get('button').contains('Cologne').click();
      cy.contains('Filter jobs').click();
      cy.get('[data-cy=job]').its('length').should('be', 18)
    })
  })
});
