before(() => {
   cy.visit('https://www.atp-autoricambi.it/');
   cy.acceptCookies();
});

describe('Buy a product', () => {
    it('Loading the page', () => {
        cy.get("[data-testid='vehicle-selector-root'] .select-car-dropdowns-wrapper").should('be.visible');
    });

    it('Select searching criteria', () => {
        cy.selectValue('produttore', 'TOYOTA');
    });
});