/// <reference types="cypress"/>

describe('Interações', () => {
    
    it('Preenchendo campo de texto', () => {

        cy.visit('/')
            .get('.header-logo')
        
        cy.get('.form-control').as('email') // pega o elemento
            .type('teste@teste.com{enter}') // preenche o campo e-mail e submete pressionando a tecla Enter
            .get('.swal2-confirm.swal2-styled') // fecha a popUp de confirmação
            .click() // pressiona o botão    
            
        cy.get('@email')    
            .type('email@text.com') // apenas preeche o campo 
               
    })
            
    it('Selecionando um item em um select', () => {

        cy.visit('/')
            .get('.header-logo')

        cy.get('.footer_one_widget') // pega o elemento diminuindo o escopo
            .contains('Checkout View Two') // verifica se dentro existe o texto
            .click() // clica no link redirecionando para página checkout
        
        cy.get('#country') // capturando o select 
            .select('Afghanistan') // selecionando a opção desejada    

    })    
            
    it('Marcando e desmarcando um chechbox', () => { // .header-logo
        
        cy.visit('/')
            .get('.header-logo') 
        
        cy.get('.footer_one_widget')
            .contains('Checkout View One')    
            .click()
    
        cy.get('#materialUnchecked')
            .check()
            .uncheck()
        
    })
    
    it('Selecionando um radion button', () => { // .header-logo 

        cy.visit('/')
            .get('.header-logo')
        
        cy.get('.footer_one_widget') // diminui o escopo 
            .contains('Checkout View One') // cerifica seo texto/link está presente
            .click() // clica no link e direcionado

        cy.get('#css') // seleciona o radio button Direct Bank Transfer
            .check() // marca a opção
        
        cy.get('#javascript') // seleciona outro radio button Mobile Banking
        .check() // marca a opção

        cy.get('#html') // seleciona Paypal
            .check() // marca a opção

    })


})