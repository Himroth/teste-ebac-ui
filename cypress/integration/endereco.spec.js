/// <reference types="cypress" />

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)


        })

    });

    //Teste com comando customizados para login(adicionado beforeEach) e cadastro de endereço dentro da pasta support no arquivo commands
    it('Deve fazer cadastro de faturamento com sucesso', () => {

    });
});