/// <reference types="cypress"/> 

describe('Compra de produto', function() {
    beforeEach(function() {
      cy.visit('https://www.saucedemo.com/v1/index.html')
      cy.get('#login-button').should('be.visible')
      cy.login_command('standard_user', 'secret_sauce')
      cy.get('.product_label').should('contain', 'Products') 
    });

it.only ('Compra de produto com sucesso', function(){
    //Ordenando do menor para o maior
    cy.get('.product_sort_container').select('lohi').should('contain', 'Price (low to high)')

    //Validação da ordenação dos produtos
    cy.get(':nth-child(1) > .inventory_item_label').should('contain', 'Sauce Labs Onesie')
    cy.get(':nth-child(2) > .inventory_item_label').should('contain', 'Sauce Labs Bike Light')
    cy.get(':nth-child(3) > .inventory_item_label').should('contain', 'Sauce Labs Bolt T-Shirt')
      
    //Adicionando produtos ao carrinho
    cy.addProduto_command()

    //Checagem do numero de produtos que foram adicionados
    cy.get('.fa-layers-counter').should('have.text', '3')

    //Entrando no carrinho e fazendo a verificação
    cy.get('.fa-layers-counter').click()
    cy.compra_command() //chamando o command
     

    //Checkout
    cy.checkout_command()

    //Verificação dos produtos no checkout
    cy.compra_command()

    //Verificação dos valores
    cy.get('.summary_subtotal_label').should('have.text','Item total: $53.97')
    cy.get('.summary_tax_label').should('have.text', 'Tax: $4.32')
    cy.get('.summary_total_label').should('have.text', 'Total: $58.29')
    cy.get('.btn_action').click()

    //Verificação da finalização do checkout
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')

    })


})