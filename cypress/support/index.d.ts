/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByDataCy(selector: string): Chainable<JQuery<HTMLElement>>;
  }
}
