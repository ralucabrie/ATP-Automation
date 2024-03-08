/// <reference types="cypress" />

Cypress.Commands.add('acceptCookies', () => {
    return cy.get("#usercentrics-root").shadow().find('[data-testid="uc-accept-all-button"]')
  });

Cypress.Commands.add('selectValue', (placeholder, value) => {
    return cy.get(`input[placeholder*= '${placeholder}']`).clear().type(`${value}`);
});

Cypress.Commands.add('searchButton', () => {
  return cy.get("[data-testid='select-vehicle-button-root'] button");
});

Cypress.Commands.add('addToCartButton', () => {
  return cy.get('#product-info-add-to-cart');
});

Cypress.Commands.add('checkoutButton', () => {
  return cy.get('.checkout-button');
});

Cypress.Commands.add('typeText', (locator, text) => {
  return cy.get(`${locator}`).type(`${text}`);
});

Cypress.Commands.add('continueButton', () => {
  return cy.get('[data-testid="payment-summary-root"] button').first();
});

Cypress.Commands.add('goToPayment', () => {
  return cy.get('[data-testid="order-summary-root"] button');
});