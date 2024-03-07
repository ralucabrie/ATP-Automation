import './commands'

declare global {
      namespace Cypress {
        interface Chainable {
          acceptCookies(): Chainable;
          selectValue(placeholder: string, value: string): Chainable;
        }
      }
    }