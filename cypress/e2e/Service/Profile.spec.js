/// <reference types="cypress" />
import profile from '../../fixtures/profile.json'

describe('Teste de Criação de Perfis', () => {

    let token

    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })


    it('[POST] - Criar/Atualizar perfil', () => {
        // Cria ou atualiza um perfil existente para o usuário com base no token informado no header. 
        cy.request({
            method: 'POST',
            url: '/api/profile',
            headers: {
                Cookie: token

            },
            body: profile
        }).then((response) => {
            expect(response.status).to.eq(200) // Perfil do usuário atualizado
        })
    })    
});

describe('Teste de consulta', () => {

    let token

    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })

    it('[GET] - Seleciona todos os perfis cadastrados no banco', () => {
        cy.request({
            method: 'GET',
            url: '/api/profile',
            headers: {
                Cookie: token
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })


    /* it.only('[GET] - Seleciona o perfil do usuário logado com base no ID informado no parâmetro de path', () => {

        cy.criarprofile(token, "profileID").then((response) => {
            let user 

            cy.request({
                method: 'GET',
                url: `/api/profile/user/}`,

                headers: {
                    Cookie: token

                },


            }).then((response) => {
                expect(response.status).to.eq(200)

            })

        })
    }) */
});    

/* describe('Teste de exclusão', () => {
    let token

    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })

    it('[DELETE] Excluir um perfil', () => {

        cy.criarProfile(token, "profileID").then((response) => {
            let id = response.body._id

            cy.request({
                method: 'DELETE',
                url: `/api/auth/${id}`,

                headers: {
                    Cookie: token

                },
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.msg).to.eq("Perfil removido")

            })
        })
    })
}); */


describe('Teste de alteração', () => {
    let token

    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })

    it.only('[PUT] Curtir uma profile', () => {

        cy.criarProfile(token, "profile").then((response) => {
            // Adiciona experiência profissional no perfil com base no token informado no header. Pegar o token no serviço -> Auth - [POST] /api/auth

             let id = response.body._id

            cy.request({
                method: 'PUT',
                url: `/api/profile/${id}`,

                headers: {
                    Cookie: token

                },
            }).then((response) => {
                expect(response.status).to.eq(200) //Perfil do usuário
                
            })

        })

    })
});

