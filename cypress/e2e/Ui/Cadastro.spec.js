/// <reference types="cypress" />
const faker = require('faker-br')


describe('US002 - Funcionalidade: Cadastro', () => {

beforeEach(() => { // Faz o visit antes de cada cenário
    cy.visit('cadastrar')
    
});


/*
antes de tudo
before

antes de cada cenário
beforeEach

depois de tudo 
after

depois de cada cenário
afterEach
*/

    it('Deve fazer cadastro com sucesso', () => {
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('Leila Burghi3')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email())
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123654')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123654')
        cy.get('[data-test="register-submit"]').click()

        // Resultado Esperado
        cy.get('.large').should('contain','Dashboard')
        cy.get('[data-test="dashboard-createProfile"]').should('exist')

        cy.get('[data-test="dashboard-welcome"]', {timeout:11000}).click()
        
    });
    
});