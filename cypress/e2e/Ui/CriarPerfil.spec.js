/// <reference types="cypress" />
const faker = require('faker-br')

describe('US003 - Funcionalidade: Criar Perfil', () => {

    beforeEach(() => { 
        
        cy.cadastraruser("Via Varejo",faker.internet.email(),"ps123456"); 
        
    });


    it('Criar Perfil com sucesso', () => {
              
        cy.visit('criar-perfil')

        cy.get('#mui-component-select-status')

        .then(($li) => {
    
            const items = $li.toArray()
    
            return Cypress._.sample(items)
    
        }).click()


        cy.get('[data-value="Outro"]', {timeout:6000}).click()
        
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.company.companyName())
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.url())
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.address.city()+ ' , ' + faker.address.state())
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.random.word() + ' - ' + faker.random.word() + ' - ' +faker.random.word())
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.random.word() +'@'+ 'via.com.br')
        cy.get('[rows="1"]').type('Trabalho na área de QA, sou mãe da (o) ' + faker.name.firstName() + ' entrei na '+ faker.company.companyName() + ' em '+ faker.date.month() + ' do ano passado')
        cy.get('[data-test="profile-socials"]').click()

        cy.get(':nth-child(5) > .form-text')
        cy.get('[data-test="profile-facebook"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.facebook.com/',faker.random.word())
        cy.get('[data-test="profile-youtube"] > .MuiInputBase-root > .MuiInputBase-input')
        cy.get('[data-test="profile-linkedin"] > .MuiInputBase-root > .MuiInputBase-input').type('https://br.linkedin.com/company/viahubtecnologia')
        cy.get('[data-test="profile-instagram"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.instagram.com/viahub.tech/')
        cy.get('[data-test="profile-medium"] > .MuiInputBase-root > .MuiInputBase-input')
        cy.get('[data-test="profile-submit"]').click()

        // Resultado Esperado
        cy.get('[data-test="alert"]').should('contain','Perfil Criado')
    });

    it('Criar Perfil sem preencher o campo obrigatório', () => {

        cy.visit('criar-perfil')
        //cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.random.word() + ' - ' + faker.random.word() + ' - ' +faker.random.word())
        cy.get('[data-test="profile-submit"]').click()

        // Resultado Esperado
        cy.get('.MuiFormHelperText-root').should('contain','Conhecimentos é obrigatório')
                       
    });

});
