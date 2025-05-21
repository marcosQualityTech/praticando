/// <reference types="cypress" />

import login_page from "../support/pages/login_page";

describe('Logando no ecommerce', () => {
    
    beforeEach('Verificando se o ecommerce está online', () => {
        login_page.ecommerce_online()
    })

    it('logando na plataforma', () => {
        
    });






});