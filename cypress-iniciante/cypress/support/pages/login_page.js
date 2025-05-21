/// <reference types="cypress" />

import { Faker } from "@faker-js/faker"

export default {

        ecommerce_online() {
            cy.visit('/login')
                .get('.top_header_left > p')
                .should('have.text', 'Promoções especiais disponíveis.Aproveitar...')
        },        
        
        cy.get('.account_form')
                .contains('Login')
        





}