/// <reference types="cypress"/> 

describe('Teste funcional de Login', function() {
  beforeEach(function() {
    cy.visit('https://www.saucedemo.com/v1/index.html')

    cy.get('#login-button').should('be.visible') 
  });

  it ('Login com dados válidos', function() {
    cy.login_command('standard_user','secret_sauce') //chamando o command
    cy.get('.product_label').should('contain', 'Products')
  })

  it ('Login com usuário inválido', function() {
    cy.login_command('usuario_invalido', 'secret_sauce')
    cy.get('[data-test="error"]').should('be.visible')
  })

  it ('Login com senha inválida', function() {
    cy.login_command('standard_user', 'secret')
    cy.get('[data-test="error"]').should('be.visible')
  })
  
  it ('Login com usuário bloqueado', function() {
    cy.login_command('locked_out_user', 'secret_sauce')
    cy.get('[data-test="error"]').should('be.visible')
  })

  it ('Login com usuário com problema', function() {
    cy.login_command('problem_user', 'secret_sauce')
    cy.get('.bm-burger-button > button').click()
    cy.get('#logout_sidebar_link').click() //logout
  })


})