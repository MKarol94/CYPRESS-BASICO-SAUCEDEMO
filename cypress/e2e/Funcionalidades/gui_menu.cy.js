/// <reference types="cypress"/> 

describe('Menu esquerdo', function() {
    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#login-button').should('be.visible')
        cy.login_command('standard_user', 'secret_sauce')
        cy.get('.product_label').should('contain', 'Products')
    })

it('Clicar em All Items', function() {
    cy.get('.bm-burger-button > button').click()
    cy.get('#inventory_sidebar_link').click()
})

/*a página demora para carregar
it('Clicar em About', function() {
    cy.get('.bm-burger-button > button').click() 
    cy.get('#about_sidebar_link').click()
})*/

it ('Clicar em Logout', function () {
    cy.get('.bm-burger-button > button').click() 
    cy.get('#logout_sidebar_link').click()
    //validando se o sistema realmente retornou para a tela de login
    cy.get('#login_credentials'). should('contain', 'Accepted usernames are:') 
})

it ('Clicar em Reset App Store', function () {
    cy.get('.bm-burger-button > button').click() 
    cy.get('#reset_sidebar_link').click()
    //vealidando se o carrinho está vazio
    cy.get('.fa-layers-counter').should('not.exist')
    //validando se está filtrado do A a Z
    cy.get('.product_sort_container').should('contain', 'Name (A to Z)')
})


})