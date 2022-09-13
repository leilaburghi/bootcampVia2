/// <reference types="cypress" />

import auth from '../../fixtures/auth.json'

it('[POST] - Teste de autenticacao', () => {
    cy.request({

        method: 'POST',
        url: '/api/auth',
        body: auth

    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.not.empty
        expect(response.body).to.have.property("jwt")
        cy.getCookies("conexaoqa.herokuapp.com").should('exist')

        /*console.log(response.body)
        cy.log(response.body) */
    })
});


it('[POST] - Teste de autenticacao com usuario invalido', () => {
    cy.request({

        method: 'POST',
        url: '/api/auth',
        failOnStatusCode: false,
        body: {
            "email": "leilabyb2@bootcamp.com",
            "password": "123654"                 

        }

    }).then((response) => {
        expect(response.status).to.eq(401)
    })
});