/// <reference types="cypress"/> 

Cypress.Commands.add('compra_command',() => {
    cy.get('.cart_list > :nth-child(3)').should('contain', 'Sauce Labs Onesie')
    cy.get('.cart_list > :nth-child(4)').should('contain', 'Sauce Labs Backpack')
    cy.get('.cart_list > :nth-child(5)').should('contain', 'Test.allTheThings() T-Shirt (Red)')
})