/// <reference types="cypress" />

import commum_page from '../support/pages/commum_pages'
import cadastro_Page from '../support/pages/cadastro_usuario_page'

describe('Cadastro de usuário', () => {
    
    beforeEach('Acessar cadastro de usuários', () => {
        commum_page.acessarCadastroUsuario()
    })

    it('campo nome vazio', () => {
        cadastro_Page.clicarCadastrar()
        cadastro_Page.validaMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo e-mail vazio', () => {
        cadastro_Page.preencheNome('Marcos Colossi')
        cadastro_Page.clicarCadastrar()
        cadastro_Page.validaMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('campo e-mail inválido', () => {
        cadastro_Page.preencheNome('Marcos')
        cadastro_Page.preencheEmail( 'email.com')
        cadastro_Page.clicarCadastrar()
        cadastro_Page.validaMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazio', () => {
        cadastro_Page.preencheNome('Colossi')
        cadastro_Page.preencheEmail('colossi@teste.com')
        cadastro_Page.clicarCadastrar()
        cadastro_Page.validaMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo senha inválido', () => {
        cadastro_Page.preencheNome('Oliveira')
        cadastro_Page.preencheEmail('oliveira@teste.com')
        cadastro_Page.preencheSenha('124')
        cadastro_Page.clicarCadastrar()
        cadastro_Page.validaMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', () => {
        cadastro_Page.preencheNome('Marcos Colossi de Oliveira')
        cadastro_Page.preencheEmail('mcoliveira@teste.com')
        cadastro_Page.preencheSenha('123456')
        cadastro_Page.clicarCadastrar()
        cadastro_Page.validaMensagemSucesso('Marcos Colossi de Oliveira')
    })
})