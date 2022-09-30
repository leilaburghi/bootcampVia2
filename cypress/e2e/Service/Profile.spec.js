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
});    


describe('Adição de Experiência Profisional', () => {

    let token

    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })

    it('[PUT] - Adicionar experiência profissional',()=>{
            cy.request({
                method: 'PUT',
                url: '/api/profile/experience',
                headers:{
                    Cookies: token
                },
                body:                
                {
                    "title": "Gestora na área de QA",
                    "company": "MoveMais Meios de Pagamento",
                    "location": "Av. Alcantara, 111 - Jd Melhado - Araraquara-SP",
                    "from": "2015-05-01",
                    "to": "2021-07-12",
                    "current": false,
                    "description": "Responsável pela área de qualidade de software da empresa"
                  }
            }).then((response)=>{
                expect(response.status).to.eq(200)
            })
    
    })

});



describe('Deleção de conta de usuário', () => {
    beforeEach(()=>{
        cy.criarUsuario().then((auth)=>{
            token = auth
        })
    })

    let token
    it('[DELETAR] - Deletar conta de usuário',()=>{
            cy.request({
                method: 'DELETE',
                url: '/api/profile',
                headers:{
                    Cookies: token
                }
            }).then((response)=>{
                expect(response.status).to.eq(200)
            })
    
    })
});