
  before(() => {
    cy.restoreLocalStorage();
    cy.visit('https://www.atp-autoricambi.it/');
    cy.acceptCookies().click();
});

afterEach(() => {
    cy.saveLocalStorage();
  });

describe('Buy a product', () => {
    it('Loading the page', () => {
        cy.get("[data-testid='vehicle-selector-root'] .select-car-dropdowns-wrapper").should('be.visible');
    });

    it('Search for a product', () => {
        cy.selectValue('produttore', 'TOYOTA');
        cy.get("[id*='option-0']").should('be.visible').click();

        cy.selectValue('modello', 'RUNNER');
        cy.get("[id*='option-0']").should('be.visible').click();

        cy.selectValue('variante', '2.4 D');
        cy.get("[id*='option-0']").should('be.visible').click();

        cy.searchButton().click();
    });

    it('Correct page is displayed', () => {
        cy.get('h1.categories-title').should('include.text', 'TOYOTA');
        cy.get('h1.categories-title').should('include.text', 'RUNNER');
    });

    it('Select a category', () => {
        cy.get('.category-item-title').first().invoke('text').as('categoryTitle');
        cy.get('.category-item-title').first().click();
        cy.get('.search-title').invoke('text').as('pageTitle')
        expect(this.categoryTitle).to.equal(this.pageTitle);
    });

    it('Add product to cart', () => {
        cy.addToCartButton().click();
    });

    it('Go to Checkout', () => {
        cy.checkoutButton().click();
    });

    it('Go to Verification page', () => {
        cy.typeText('#firstName-address-form-input', 'John');
        cy.typeText('#lastName-address-form-input', 'Maxwell');
        cy.typeText('#email-address-form-input', 'test@test.com');  
        cy.typeText('#street-address-form-input-label', 'Str Test');
        cy.typeText('#houseNumber-address-form-input', 'no 20');
        cy.typeText('#postalCode-address-form-input', '400409'); 
        cy.typeText('#city-address-form-input', 'Cluj-Napoca');
        cy.typeText('#phone-number-input', '345677');
        cy.continueButton().click();
    });

    it('Go to Payment', () => {
        cy.goToPayment().click();
    });
});