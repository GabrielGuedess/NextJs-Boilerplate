/// <reference types="cypress" />

import '@testing-library/cypress/add-commands';

Cypress.Commands.add('getByDataCy', selector =>
  cy.get(`[data-cy="${selector}"]`),
);
