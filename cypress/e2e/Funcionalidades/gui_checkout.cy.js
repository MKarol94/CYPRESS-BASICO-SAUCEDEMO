/// <reference types="cypress"/> 

describe ('Tela de checkout', function (){
    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#login-button').should('be.visible')
        cy.login_command('standard_user', 'secret_sauce')
        cy.get('.product_label').should('contain', 'Products') 
      });

it('Checkout preenchendo somente o campo First Name', function() {
    cy.addProduto_command()
    cy.get('.fa-layers-counter').click()
    cy.get('.btn_action').click()
    //validando se está realmente está na tela de checkout
    cy.get('.subheader').should('contain', 'Checkout: Your Information')
    cy.get('[data-test="firstName"]').type('Primeiro Nome')
    cy.get('.btn_primary').click()
    //validando se uma mensagem de erro é exibida
    cy.get('[data-test="error"]').should('be.visible')
})

it('Checkout preenchendo somente o campo Last Name', function() {
    cy.addProduto_command()
    cy.get('.fa-layers-counter').click()
    cy.get('.btn_action').click()
    //validando se está realmente está na tela de checkout
    cy.get('.subheader').should('contain', 'Checkout: Your Information')
    cy.get('[data-test="lastName"]').type('Último Nome')
    cy.get('.btn_primary').click()
    //validando se uma mensagem de erro é exibida
    cy.get('[data-test="error"]').should('be.visible')
})

it('Checkout preenchendo somente o campo Zip/Postal Code', function() {
    cy.addProduto_command()
    cy.get('.fa-layers-counter').click()
    cy.get('.btn_action').click()
    //validando se está realmente está na tela de checkout
    cy.get('.subheader').should('contain', 'Checkout: Your Information')
    cy.get('[data-test="postalCode"]').type('5555-555')
    cy.get('.btn_primary').click()
    //validando se uma mensagem de erro é exibida
    cy.get('[data-test="error"]').should('be.visible')
})

it.only('Checkout preenchendo todos os campos e depois limpando os campos', function() {
    cy.addProduto_command()
    cy.get('.fa-layers-counter').click()
    cy.get('.btn_action').click()
    //validando se está realmente está na tela de checkout
    cy.get('.subheader').should('contain', 'Checkout: Your Information')
    //preenchendo os campos e validando se realmente foi escrito
    cy.get('[data-test="firstName"]').type('Primeiro Nome').should('have.value', 'Primeiro Nome')
    cy.get('[data-test="lastName"]').type('Último Nome').should('have.value', 'Último Nome')
    cy.get('[data-test="postalCode"]').type('5555-555').should('have.value', '5555-555')
    //preenchendo os campos, os limpando e verificando se estão limpos
    cy.get('[data-test="firstName"]').type('Primeiro Nome').clear().should('have.value', '')
    cy.get('[data-test="lastName"]').type('Último Nome').clear().should('have.value', '')
    cy.get('[data-test="postalCode"]').type('5555-555').clear().should('have.value', '')

})


})