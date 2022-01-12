/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)


        })

    });

    //Teste com comando customizados para login(adicionado beforeEach) e cadastro de endereço dentro da pasta support no arquivo commands
    //Teste usando paga objects, arquivo endereco.page.js    
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Helton', 'Imroth', 'Empresaaaa', 'Brasil', 'Ederecoooo', '2321', 'São Paulo', 'São Paulo', '89053210', '312321', 'email@email.com')
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    });
});