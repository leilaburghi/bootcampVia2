// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

import auth from '../fixtures/auth.json'
import profile from '../fixtures/profile.json'
import experience from '../fixtures/experience.json'

Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 110000 })
    cy.wait('@loadpage')
})

Cypress.Commands.add("login", (email, senha) => {

    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="login-submit"]').click()

})

Cypress.Commands.add("cadastraruser", (company,internet,psw) => {
    

    cy.visit('cadastrar')

    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(company)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(internet)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(psw)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(psw)
    
    //cy.cadastraruser("Via Varejo","www.viavarejo.com.br","ps123")
    cy.get('[data-test="register-submit"]').click()

    //cy.get('[data-test="dashboard-welcome"]', {timeout:11000}).click()
})

Cypress.Commands.add("tokenJwt", () => {
    cy.request({

        method: 'POST',
        url: '/api/auth',
        body: auth

    }).then((response) => {
        return response.body.jwt
        
    })
})

Cypress.Commands.add("criarPostagem", (token,value) => {
    cy.request({

        method:'POST',
        url: '/api/posts',
        headers:{
            Cookie:token
        },

        body: {
            text: "bootcamp06-09-22"
        } 
         
    })

})

Cypress.Commands.add("criarProfile", (token,value) => {
    cy.request({

        method:'POST',
        url: '/api/profile',
        headers:{
            Cookie:token
        },

        body: {
            text: "Criação de Perfil"
        } 
         
    })

})


Cypress.Commands.add("adicionarExperiencia", () => {
    cy.request({

        method: 'POST',
        url: '/api/auth',
        body: experience

    }).then((response) => {
        return response.body.jwt
        
    })
})