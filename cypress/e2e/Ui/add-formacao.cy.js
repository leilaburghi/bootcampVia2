/// <reference types="cypress" />
const FormacaoPage = require('../../support/Formacao/formacao-pages.js')

describe('Funcionalidade: Adicionar formacao', () => {

    beforeEach(() => {
        cy.visit('login')
        cy.fixture("usuarios").then((user) => {
            cy.login(user[0].email, user[0].senha)
        })
        cy.visit('adicionar-formacao')
        
    });

    it('Deve adicionar uma formacao com sucesso', () => {
        FormacaoPage.addFormacao('Fatec Taquaritinga','Superior Completo','Tecnologia em Segurança da Informação','01/06/2020','01/06/2023','ViaHub é top')
        cy.get('[data-test="experience-delete"]').should('exist')
                
    });

    it('Deve excluir uma formacao com sucesso', () => {
        FormacaoPage.addFormacao('Fatec Taquaritinga','Superior Completo','Tecnologia em Segurança da Informação','01/06/2020','01/06/2023','ViaHub é top')
        cy.get('[data-test="education-delete"]').first().click()
        cy.contains('Formação Acadêmica Removida').should('be.visible')
    }); 
    
});