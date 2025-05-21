/// <reference types="cypress" />
describe('Get Elements', () => {
    // selecionar elementos 
    it('Encontrar elementos em uma página', () => {
        cy.visit('/')
            .get('.header-logo')
        
        // Contains() - encontra elementos por texto
        // geralmente diminuindo o escopo da busca com um get() antes
        cy.get('#top_header').as('cabecalho')
            .contains('Login')

        // find() - encontra os elementos
        // geralmente diminuindo o escopo da busca com um get() antes
        cy.get('#top_header')
            .find('.fa-user')

        cy.get('@cabecalho')
            .find('.fa-user')
    });
});