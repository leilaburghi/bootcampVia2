class ExperienciaPage{

    get #posicao() {return  cy.get('[data-test="experience-title]')}    
    get #empresa() {return  cy.get('[data-test="experience-company"]')}
    get #local() {return  cy.get('[data-test="experience-location]')}
    get #dataInicio() {return  cy.get('#from')}
    get #dataFim() {return  cy.get('#to')}
    get #descricao() {return  cy.get('[rows="1"]')}
    get #btnAdd() {return  cy.get('[data-test="experience-submit]')}
    get #checkAtual() {return  cy.get('.jss5')}

    addExperiencia(posicao,empresa,local,dataInicio,dataFim,descricao){
        this.#posicao.type(posicao)//,{ delay: 1000})
        this.#empresa.type(empresa)//,{ delay: 1000})
        this.#local.type(local)
        this.#dataInicio.type(dataInicio)
        this.#dataFim.type(dataFim)
        this.#descricao.type(descricao)
        this.#btnAdd.click()
    }

    addExperienciaAtual(posicao,empresa,local,dataInicio,descricao){
        this.#posicao.type(posicao) //{ delay: 1000})
        this.#empresa.type(empresa)
        this.#local.type(local)
        this.#dataInicio.type(dataInicio)        
        this.#checkAtual.check()
        this.#descricao.type(descricao)
    }
  
}
module.exports = new ExperienciaPage()


/*
describe('Funcionalidade: Adicionar experiência', () => {

    beforeEach(() => {
        cy.fixture("usuarios").then((user) => {
            cy.login(user[1].email, user[1].senha)
        })
        cy.visit('adicionar-experiencia')
        
    });

   it('Deve adicionar uma experiência com sucesso', () => {
        ExperienciaPage.addExperiencia('QA','Via','SP','01/01/2020','01/01/2040','ViaHub é top')
        // data-test="status-'+ faker.random.number({max:10}) + '"
        
    });

});
*/