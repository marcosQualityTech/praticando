/// <reference types='cypress' />

export default {
    clicarCadastrar() {
        cy.get('#btnRegister')
            .click()    
    },

    validaNomeVazio() {
        cy.get('#user')
            .should('have.value', '')
    },

    preencheNome(nome) {
        cy.get('#user')
            .type(nome)
    },

    preencheEmail(email) {
        cy.get('#email')
            .type(email)
    },

    preencheSenha(senha) {
        cy.get('#password')
            .type(senha) 
    },

    validaMensagemSucesso(nome) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${nome}`)
    },

    validaMensagemErro(message) {
        cy.get('.errorLabel')
            .then((element) => {
                expect(element).to.be.visible
                expect(element).to.have.text(message)
            })
    }

}