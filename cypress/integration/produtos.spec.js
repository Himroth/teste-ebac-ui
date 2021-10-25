/// <reference types="cypress" />

context('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
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
    it('Deve adicionar um produto ao carrinho', () => {

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



    //Usando comandos customizados
    it('Deve adicionar produtos ao carrinho usando comando customizado', () => {
        cy.addProduto('Abominable Hoodie', 'M', 'Green', 2)
        
    });

    it.only('Deve adicionar produtos ao carrinho usando comando customizado', () => {
        cy.addProduto('Ariel Roll Sleeve Sweatshirt', 'XS', 'Red', 4)
        
    });

});