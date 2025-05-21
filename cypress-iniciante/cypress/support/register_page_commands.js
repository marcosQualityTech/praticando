/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
const email = faker.internet.email()
const password = faker.internet.password()
// elemtentos
const elements = {
    buttons: {
        cadastrar: '#btnRegister',
        login: '#btnLogin',
        popUp: '.swal2-confirm'
    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password'
    },
    message: {
        error: '.errorLabel',
        cadSuccess: '.swal2-popup.swal2-modal',
        logSuccess: '#swal2-title'
    }
}

// acessa a página de cadastro
Cypress.Commands.add('accessRegisterForm', () => {
    cy.get('.account_form > h3')
        .should('be.visible')
        .should('have.text', 'Cadastro de usuário')
})
// acessa a tela de login e verifica se o campo nome está vazio
Cypress.Commands.add('verifyNameEmpty', () => {
    cy.get(elements.fields.name)
       .should('be.empty')
})
// preenche o nome do usuário via fixture
Cypress.Commands.add('fillName', (name) => {
    cy.get(elements.fields.name)
        .type(name)
})
// verifica se o campo email está vazio
Cypress.Commands.add('verifyEmailEmpty', () => {
    cy.get(elements.fields.email)
       .should('be.empty')
})
// preenche o campo email (válido e inválido) via parametro
Cypress.Commands.add('fillEmail', (email) => {
    cy.get(elements.fields.email)
        .type(email)
})
// verifica se o campo senha está vazio
Cypress.Commands.add('verifyPasswordEmpty', () => {
    cy.get(elements.fields.password)
        .should('be.empty')
})
// preenche o campo senha
Cypress.Commands.add('fillPassword', (password) => {
    cy.get(elements.fields.password)
        .type(password)
})
// preciona o botão para submeter o formulário
Cypress.Commands.add('btnRegister', () => {
    cy.get(elements.buttons.cadastrar) 
        .click()
        .wait(1000)
})
// verifica se a mensagem de obrigatoriedade é exibida e está visivel na tela
Cypress.Commands.add('check_msg', (message) => {
    cy.get(elements.message.error)
        .should('have.text', message)
        .should('be.visible')
})
// verifica se o cadastro foi bem sucesdido via popUp com mensagem de sucesso
Cypress.Commands.add('check_msg_success', (msgSuccess) => {
    cy.get(elements.message.cadSuccess)
        .should('be.visible')
        .contains(msgSuccess)
    })
// verifica a mensagem de boas vindas    
Cypress.Commands.add('userWelcome', () => {
    cy.get(elements.message.cadSuccess)    
        .contains('Bem-vindo' )
// verifica se o botão para fechar a popUp está visivel e habilitado
    cy.get('.swal2-confirm.swal2-styled')
        .should('be.visible')
        .should('not.be.disabled')
        .click()
    })    
// Verifica se o usuário está logado na página correta
Cypress.Commands.add('verify_url', () => {
    cy.url()
       .should('contain', '/my-account')
}) 
// Login usando faker
Cypress.Commands.add('accessLogin', () => {
    cy.visit('/login')
    cy.get('.account_form')
        .should('be.visible')
        .contains('Login')   
})
// insere as credenciais válidas
Cypress.Commands.add('fill_user', () => {
    cy.get(elements.fields.name)
        .should('be.empty')
        .type(email)      
})
Cypress.Commands.add('fill_pass', () => {
    cy.get(elements.fields.password)
        .should('be.empty')
        .type(password)    
})
Cypress.Commands.add('bt_login', () => {
    cy.get(elements.buttons.login, {Timeout: 1000})
        .should('be.visible')
        .should('be.enabled')
        .click()
})
Cypress.Commands.add('messageLoginSuccess', () => {
    cy.get(elements.message.logSuccess)
        .should('have.text', 'Login realizado')
        .should('be.visible')

    cy.get('#swal2-html-container')
        .should('be.visible')
        .contains('Olá,', email)
    
    cy.get(elements.buttons.popUp)
        .should('be.visible')
        .should('be.enabled')
        .click()

    cy.get('#userLogged')
        .contains(email)
        .should('be.visible')    
})