import './commands'

declare global {
      namespace Cypress {
        interface Chainable {
          acceptCookies(): Chainable;
        }
      }
    }