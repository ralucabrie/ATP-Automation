/// <reference types="cypress" />

Cypress.Commands.add('acceptCookies', () => {
    return cy.get("#usercentrics-root").shadow().find('[data-testid="uc-accept-all-button"]').click();
  });