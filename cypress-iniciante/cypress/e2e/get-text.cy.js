/// <reference types="cypress" />

describe('Ge Texts', () => {
    it('Capturar texto de um elemento', () => {
        
        cy.visit('/')
            .get('.header-logo')
        
        cy.get('.top_header_left > p')
            .then((element) => {
                element.text
            //    console.log(element.text())
            })

        cy.get('.footer_left_side > p')
            .then((element) => {
                element.text
            //    console.log(element.text())
            })

        cy.get('.center_heading > h2')
            .then((element) => {
                element.text
            //    console.log(element.text())
            })
        
        cy.get('.elec_promo_text > h2')
            .then((element) => {
                element.text
            //    console.log(element.text())
            })
        
        cy.get('.icon_promo_item:nth-of-type(4) > p')
            .then((element) => {
                element.text
                //    console.log(element.text())
            })    
            
    });

});