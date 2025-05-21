/// <reference types='cypress' />

// método para acessar a tela de cadastro
export default {
    acessarCadastroUsuario() {
        cy.visit('/')
            .get('#top_header')
        
            cy.get('.fa-lock')
            .click()    
    },

    acessarHomePage() {
        cy.visit('/')
            .get('#top_header')
    }
}