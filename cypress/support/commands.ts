/// <reference types="cypress" />

Cypress.Commands.add('getByDataCy', selector =>
  cy.get(`[data-cy="${selector}"]`),
);
