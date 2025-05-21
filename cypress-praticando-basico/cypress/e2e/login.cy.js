/// <reference types="cypress" />

import commum_page from '../support/pages/commum_pages'
import login_page from '../support/pages/login_pages'

describe('Login', () =>  {

    beforeEach('Acessar tela login', () => {
        commum_page.acessarHomePage()
    })

    it('Acessando a tela de login', () => {
        login_page.acessaTelaLogin()         
    })

    it('valida campo email vazio', () => {
        login_page.acessaTelaLogin()
        login_page.login()
        login_page.mensagemError('E-mail inválido.')        
    })

    it('valida e-mail inválido', () => {
        login_page.acessaTelaLogin()
        login_page.preencheEmail('marcos.com')
        login_page.preencheSenha('123456')
        login_page.login()
    })

    it('valida campo senha vazio', () => {
        login_page.acessaTelaLogin()
        login_page.preencheEmail('oliveira@teste.com')
        login_page.login()
        login_page.mensagemError('Senha inválida.')
    })

    it('valida senha inválida', () => {
        login_page.acessaTelaLogin()
        login_page.preencheEmail('jao@teste.com')
        login_page.preencheSenha('123')
        login_page.login()
    })

    it('valida login com sucesso', () => {
        login_page.acessaTelaLogin()
        login_page.preencheEmail('juca@teste.com')
        login_page.preencheSenha('12(*&^(*s')
        login_page.login()
        login_page.mensagemSucesso('juca@teste.com')
    })
})
