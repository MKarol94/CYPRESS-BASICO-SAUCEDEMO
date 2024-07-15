/// <reference types="cypress"/> 

Cypress.Commands.add('login_command', (user, password) => {
    cy.get('[data-test="username"]').type(user)
    cy.get('[data-test="password"]').type(password)
    cy.get('#login-button').click()

})

 