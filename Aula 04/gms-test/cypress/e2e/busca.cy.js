/// <reference types="cypress"/>

describe('US-001: Funcionalidade: Busca de filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve buscar filmes com sucesso', () => {
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix')
    });


    it('Deve buscar filmes com sucesso de uma lista', () => {
        cy.fixture('filmes.json').then((filmes) => {
            cy.get('#search-input').type(filmes[3].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[3].titulo)
        })
    });


    it('Deve buscar filmes com sucesso da lista inteira', () => {
        cy.fixture('filmes').each((filmes) => {
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click({ force: true })
            cy.get('#results-section').should('contain', filmes.titulo)
        })
    });

    it('Deve buscar por palavra-chave e não encontrar', () => {
        cy.get('#search-input').type('Rei leão')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Filme não encontrado.')
    });

        it.only('Deve limpar a busca', () => {
            cy.get('#clear-button').click()
        });

});
