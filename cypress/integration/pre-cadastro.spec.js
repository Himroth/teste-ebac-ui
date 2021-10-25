/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    //Teste usando variável
    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker =faker.internet.email(nomeFaker)

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('Teste123@')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')

    });

    //Teste pré cadastro usando comandos customizados

    it.only('Deve completar pré-cadastro com sucesso usando comandos customizados', () => {
        let emailFaker2 =faker.internet.email()
        let nomeFaker2 = faker.name.firstName()
        let sobrenomeFaker2 = faker.name.lastName()


        cy.preCadastro(emailFaker2, 'Teste123@', nomeFaker2, sobrenomeFaker2)
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')

    });
    
});