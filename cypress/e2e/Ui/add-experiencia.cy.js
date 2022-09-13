/// <reference types="cypress" />
const ExperienciaPage = require('../../support/Experiencia/experiencia-pages.js')

describe('Funcionalidade: Adicionar experiência', () => {

    beforeEach(() => {
        cy.visit('login')
        cy.fixture("usuarios").then((user) => {
            cy.login(user[1].email, user[1].senha)
        })
        cy.visit('adicionar-experiencia')
        
    });

    it('Deve adicionar uma experiência com sucesso', () => {
        ExperienciaPage.addExperiencia('QA','Via','SP','01/01/2020','01/01/2040','ViaHub é top')
        cy.get('[data-test="experience-delete"]').should('exist')
        // data-test="status-'+ faker.random.number({max:10}) + '"
        
    });

    it('Deve excluir uma experiência com sucesso', () => {
        ExperienciaPage.addExperiencia('QA','Via','SP','01/01/2020','01/01/2040','ViaHub é top')
        // data-test="status-'+ faker.random.number({max:10}) + '"
        cy.get('[data-test="experience-delete"]').first().click()
        cy.contains('Experiência Removida').should('be.visible')
    }); 
    
});