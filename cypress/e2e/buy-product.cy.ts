before(() => {
   cy.visit('https://www.atp-autoricambi.it/');
});

describe('Buy a product', () => {
    it('Loading Page', () => {
        cy.get("[data-testid='vehicle-selector-root'] .select-car-dropdowns-wrapper").should('be.visible');
    })
});