/// <reference types="cypress" />

Cypress.Commands.add('acceptCookies', () => {
    return cy.get("#usercentrics-root").shadow().find('[data-testid="uc-accept-all-button"]').click();
  });

Cypress.Commands.add('selectValue', (placeholder, value) => {
    cy.get(`input[placeholder*= '${placeholder}']`).type(`${value}`);
    return cy.get(`input[value='${value}']`).click()
});