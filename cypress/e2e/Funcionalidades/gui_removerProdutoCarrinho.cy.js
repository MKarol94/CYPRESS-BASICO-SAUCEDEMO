/// <reference types="cypress"/> 

describe('Remover produto do carrinho', function () {
    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#login-button').should('be.visible')
        cy.login_command('standard_user', 'secret_sauce')
        cy.get('.product_label').should('contain', 'Products') 
});
    

//Adicionando produto ao carrinho e depois removendo
it ('Remover todos os produtos do carrinho e Logout', function() {
    cy.get('.product_sort_container').select('hilo').should('contain', 'Price (high to low') 
    cy.get('#item_5_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click()
    cy.get('.inventory_details_back_button').click({force: true})
    cy.get('#item_0_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click()

    //Checagem do numero de produtos que foram adicionados
    cy.get('.fa-layers-counter').should('have.text', '2')

    //Remoção dos produtos do carrinho
    cy.get('.fa-layers-counter').click()
    cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary').click()
    cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .btn_secondary').click()

    //Verificação se o carrinho está vazio
    cy.get('.fa-layers-counter').should('not.exist')

    //Logout
    cy.get('.bm-burger-button > button').click()
    cy.get('#logout_sidebar_link').click() 
})

it.only('Remover só um produto do carrinho e realizar Checkout', function () {
    cy.addProduto_command()

    cy.get('.fa-layers-counter').should('have.text', '3')
    cy.get('.fa-layers-counter').click()
    cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .btn_secondary').click()
    cy.get('.fa-layers-counter').should('have.text', '2')
    cy.get('.cart_footer > .btn_secondary').click()
    cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
    cy.get('.fa-layers-counter').click()

    cy.checkout_command()

    //Verificação dos valores
    cy.get('.summary_subtotal_label').should('have.text','Item total: $39.97')
    cy.get('.summary_tax_label').should('have.text', 'Tax: $3.20')
    cy.get('.summary_total_label').should('have.text', 'Total: $43.17')
    cy.get('.btn_action').click()
    
})
    



})