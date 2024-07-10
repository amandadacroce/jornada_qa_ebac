/// <reference types="cypress"/>

describe('US-015-Recomendações Diárias de Filmes ', () => {

    beforeEach(() => {
      cy.visit('/')
    });
    
    afterEach(() =>{
        cy.screenshot() 
    });

    it('Deve fazer a exibição de recomendações diárias de filmes em alta', () => {
      cy.get('#recommendations')
        .find('img')  // Seleciona todas as imagens dentro da div
        .should(($imgs) => {
          // Verifica se o número de imagens está entre 4 e 5
          expect($imgs).to.have.length.within(4, 5)
        });
    });
})