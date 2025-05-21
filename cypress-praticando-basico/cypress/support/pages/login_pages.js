/// <reference types="cypress" />

export default {
    
    acessaTelaLogin() {
        cy.get('.fa-user')
            .should('be.visible')
            .click()    
    },

    login() {
        cy.get('#btnLogin')
            .should('be.visible')
            .should('be.enabled')
            .click()
    },

    preencheEmail(email) {
        cy.get('#user')
            .type(email)
    },

    preencheSenha(senha) {
        cy.get('#password')
            .type(senha)   
    },
    
    mensagemError(mensagem) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', `${mensagem}`)
    },

    mensagemSucesso(mensagem) {
        cy.get('#swal2-title')
            .should("be.visible")
        
        cy.get('#swal2-html-container')    
            .should('have.text', `Olá, ${mensagem}`)
    }

}

