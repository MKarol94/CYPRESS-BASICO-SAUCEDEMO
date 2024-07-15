/// <reference types="cypress"/> 

Cypress.Commands.add('addProduto_command',() => {
    cy.get('#item_2_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click()
    cy.get('.btn_secondary').should('contain', 'REMOVE') 
    cy.get('.inventory_details_back_button') 
      .click({ force: true }); //Utilizando o force para resolver o problema do elemento
    
    cy.get('#item_4_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click()
    cy.get('.btn_secondary').should('contain', 'REMOVE')
    cy.get('.inventory_details_back_button')
      .click({force: true});

    cy.get('#item_3_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click()
    cy.get('.btn_secondary').should('contain', 'REMOVE')
    cy.get('.inventory_details_back_button')
      .click({force: true});

})