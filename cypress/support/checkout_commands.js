/// <reference types="cypress"/> 

Cypress.Commands.add('checkout_command',() => {
    cy.get('.btn_action').click()
    cy.get('[data-test="firstName"]').type('Maria Nome')
    cy.get('[data-test="lastName"]').type('Santos Sobrenome')
    cy.get('[data-test="postalCode"]').type('0000-555')
    cy.get('.btn_primary').click()
})

