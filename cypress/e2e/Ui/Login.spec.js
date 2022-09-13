/// <reference types="cypress" />
import usuarios from "../../fixtures/usuarios.json"


describe('US001 - Funcionalidade : Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });
    
    it('Teste 1: Deve fazer login com sucesso', ()  => {
   
        cy.login ('leilabyb@bootcamp.com','123654')

        cy.get('[data-test="login-submit"]').click()
        
    });

    it('Validar mensagem de erro quando inserir usuário ou senha inválidos', ()  => {
     
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('leilabxxx@bootcamp.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123654')
        cy.get('[data-test="login-submit"]').click()
        

        cy.get('[data-test="alert"]').should('contain','Credenciais inválidas')
        cy.get('.container > :nth-child(4)', {timeout:11000}).click()
             

    });

    it('Fazer Login com sucesso - Usando importação JSON', () => {
        cy.login(usuarios[0].email,usuarios[0].senha)
        cy.title().should('eq','ConexaoQA')
    });

    it('Fazer Login com sucesso - Usando fixture', () => {
        cy.fixture("usuarios").then((user) => {
            cy.login(user[1].email, user[1].senha)

        })
        cy.title().should('eq','ConexaoQA')
    });
});


/*
    Funcionalidade: Login
    Eu como usuário das Conexão QA
    Quero fazer o login
    Parar editar meu perfil

    Cenário: Login com sucesso
        Arrange - Dado - Pré Requisito -> dado que eu esteja na tela de login
        Action - Quando - Ação do Usuário -> quando eu inserir usuário e senha
        Assert - Então - Resultado Esperado -> Então deve me direcionar para o Dashboard

        Esquema do cenário
        Quando eu inserir <usuário> 
        E senha 
        Então

        Exemplos:
        | usuario| senha|
        |"leilabyb@bootcamp.com"| "123654" |
"       |"andreb@bootcamp.com"| "123654" |

    Cenário: Validar mensagem de erro

    Cenário: Recuperar senha
*/ 