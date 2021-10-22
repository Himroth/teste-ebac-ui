/// <reference types="cypress" />

context('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    //Pegando elementos de uma lista em uma classe
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });
    //Teste usando variável quantidade
    it.only('Deve adicionar um produto ao carrinho', () => {

        var quantidade = 5

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
        cy.get('.button-variable-item-L')
            .click()
        cy.get('.button-variable-item-Green')
            .click()
        cy.get('.input-text')
            .clear()
            .type(quantidade)
        cy.get('.single_add_to_cart_button')
            .click()
        cy.get('.dropdown-toggle > .mini-cart-items')
            .should('contain' , quantidade)
        cy.get('.woocommerce-message')
            .should('contain' , quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });


});