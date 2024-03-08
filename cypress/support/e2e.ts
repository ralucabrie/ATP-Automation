import './commands';
import "cypress-localstorage-commands";

declare global {
      namespace Cypress {
        interface Chainable {
          acceptCookies(): Chainable;
          selectValue(placeholder: string, value: string): Chainable;
          searchButton(): Chainable;
          addToCartButton(): Chainable;
          checkoutButton(): Chainable;
          typeText(locator: string, text: string): Chainable;
          continueButton(): Chainable;
          goToPayment(): Chainable;
        }
      }
    }