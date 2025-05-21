/// <reference types="cypress" />

describe('Assert ', () => {

    it('Verificar se o elemento está visível', () => {

        
        cy.visit('/') // acessa a url do site
            .get('.header-logo') // pega o logo do cabeçalho
            .should('exist') // verifica se existe na página

        cy.get('.mc-form > input') // pega o input de e-mail
            .should('be.empty') // verifica se está vazio
            .type('colossi.teste@teste.com') // insere o email valido
            .type('{enter}') // submete clicando na tecla enter

        cy.get('.swal2-popup.swal2-modal') // pega a modal de sucesso
            .should('be.visible') // verifica se está visivel na tela
        //  .should('contain', 'Success')
            .contains('Success') // e se contyem o texto de sucesso    
 cy.get('.swal2-confirm.swal2-styled') // pega o botão para fechar a modal
            .should('be.visible')
            .click() // clica no botão
       
    
        cy.get('.form-control') // pega o input de e-mail
            .then((element) => {
                expect(element).visible
                expect(element).empty
                expect(element).to.have.attr('placeholder', 'Your Mail')
            }) 
        
    }) 


})
