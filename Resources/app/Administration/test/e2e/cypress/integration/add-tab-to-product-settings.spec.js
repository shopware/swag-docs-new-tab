// / <reference types="Cypress" />
describe('PluginNewTab: Tests if a tab has been added to product details', () => {
    beforeEach(() => {
        cy.loginViaApi();
    });

    it('checks for a new tab be there', () => {
        cy.visit('/admin#/sw/product/index?limit=25&page=1&sortBy=productNumber&sortDirection=DESC&naturalSorting=true');

        // create a new Product
        cy.contains('Add product').click();
        cy.get('#sw-field--product-name').type('Test product name');
        cy.get('#sw-price-field-gross').type(100).blur();
        cy.get('#sw-price-field-net').type(90).blur();
        cy.get('#sw-field--product-stock').type(1000).blur();
        cy.contains('Save').click();

        // go back to product listing
        cy.get('.sw-page__head-area').within(() => {
            cy.get('.smart-bar__back-btn').click();
        });

        // open product details
        cy.get('.sw-data-grid__actions-menu').click();
        cy.contains('Edit').click();

        // is new tab visible
        cy.get('.sw-tabs__content').within(() => {
            cy.contains('Custom').should('be.visible').click();
        });

        // iss tab content visible
        cy.contains('Hello!').should('be.visible');

        // go back to product listing
        cy.get('.sw-page__head-area').within(() => {
            cy.get('.smart-bar__back-btn').click();
        });

        // delete product
        cy.get('.sw-data-grid__actions-menu').click();
        cy.contains('Delete').click();

        cy.get('.sw-modal__footer').within(() => {
            cy.contains('Delete').click();
        });
    });
});
