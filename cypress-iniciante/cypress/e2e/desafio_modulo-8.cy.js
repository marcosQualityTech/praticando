/// <reference types="cypress" />
//import { faker } from '@faker-js/faker'

// referencia o arquivo de dados de usuário na fixture
const user_data = require('../fixtures/user_data_valid.json')
const user_data_invalid = require('../fixtures/user_data_invalid.json')

describe('Cadastro de usuários', () => {
   
    beforeEach('verificando se o ecomerce está online', () => {
        cy.ecommerceOnline()
    })
    it('acessando o formuário de cadastro', () => {
        cy.accessRegisterForm()
    })
    it('verifica se o campo nome está  vazio', () => {
        cy.verifyNameEmpty()
        cy.btnRegister()
        cy.check_msg('O campo nome deve ser prenchido')
    })
    it('verifica se o campo e-mail está vazio vazio', () => {
        cy.fillName(user_data.name)
        cy.verifyEmailEmpty(user_data.email)
        cy.btnRegister()
        cy.check_msg('O campo e-mail deve ser prenchido corretamente')
    })
    it('verifica se o email digitado é inválido', () => {
        cy.fillName(user_data.name)
        cy.fillEmail(user_data_invalid.email)
        cy.btnRegister()
        cy.check_msg('O campo e-mail deve ser prenchido corretamente')
    })
    it('verifica se o campo senha está vazio', () => {
        cy.fillName(user_data.name)
        cy.fillEmail(user_data.email)
        cy.verifyPasswordEmpty()
        cy.btnRegister()
        cy.check_msg('O campo senha deve ter pelo menos 6 dígitos')
    })
    it('senha inválida', () => {
        cy.fillName(user_data.name)
        cy.fillEmail(user_data.email)
        cy.fillPassword(user_data_invalid.password)
        cy.btnRegister()
        cy.check_msg('O campo senha deve ter pelo menos 6 dígitos')    
    })
    it('cadastro realizado com sucesso', () => {
        cy.fillName(user_data.name)
        cy.fillEmail(user_data.email)
        cy.fillPassword(user_data.password)
        cy.btnRegister()
        cy.check_msg_success('Cadastro realizado!')
        cy.userWelcome()
        cy.verify_url()
    })    
})

describe(' login usando dados da bliblioteca faker', () => {
   
    beforeEach('verificando se a página está online', () => {
// acessa a página de login        
        cy.accessLogin()            
    });
    it('Loging com faker', () => {
        cy.fill_user()
        cy.fill_pass()
        cy.bt_login()
        cy.messageLoginSuccess()            
    })
})