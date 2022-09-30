/// <reference types="cypress" />

import { beforeEach, it } from "mocha";

describe('Funcionalidade: Visualização dos perfis', () => {

    beforeEach(() => {
        cy.visit('perfis')
    });

    it('Validar o primeiro item da Lista', () => {
        cy.intercept({
            method: 'GET',
            url:'api/profile',
        },{
            statusCode: 200,
            fixture: "profile"        
        })

        cy.reload()
        cy.get('[data-test="profile-name"]').first().should('contain','Pedro Guerra')
    });

    it('Validar o terceiro item da Lista', () => {
        cy.get('[data-test="profile-name"]').eq(2).should('contain','Pa Ar')         
    });

    it('Validar lista vazia', () => {
        cy.intercept('api/profile', {statusCode: 404})
        cy.reload()
        
        cy.get('[data-test="profile-noProfile"]').should('contain','Nenhum perfil encontrado')
    });

    it('Validar o último item da Lista', () => {
        cy.get('[data-test="profile-name"]').last().should('contain','Pedro Guerra')        
    });
});