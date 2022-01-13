/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)


        })

    });

    //Teste com comando customizados para login(adicionado beforeEach) e cadastro de endereço dentro da pasta support no arquivo commands
    //Teste usando paga objects, arquivo endereco.page.js    
    //Passando os parâmetros do metodo criado
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Helton', 'Imroth', 'Empresaaaa', 'Brasil', 'Ederecoooo', '2321', 'São Paulo', 'São Paulo', '89053210', '312321', 'email@email.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });


    //Usando arquivo de dados, passando a lista criada com os dados na fixture, chamando o dadosEndereco e passando o número da lista
    it('Deve fazer cadastro de faturamento com sucesso - USANDO ARQUIVO DE DADOS', () => {
        EnderecoPage.editarEnderecoFaturamento(dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it.only('Deve fazer cadastro de entrega com sucesso - USANDO ARQUIVO DE DADOS', () => {
        EnderecoPage.editarEnderecoEntrega(dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco,
            dadosEndereco[2].numero,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });
});