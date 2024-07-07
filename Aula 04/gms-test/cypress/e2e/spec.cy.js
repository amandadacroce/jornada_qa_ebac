/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros ', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Amanda')
    cy.get('#signup-lastname').type('da Croce')
    cy.get('#signup-email').type('amanda7@teste.com')
    cy.get('#signup-password').type('Teste123@')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  });

  it('Deve fazer o cadastro de todos os campos', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Amanda')
    cy.get('#signup-lastname').type('da Croce')
    cy.get('#signup-email').type('amanda8@teste.com')
    cy.get('#signup-phone').type('47555151511')
    cy.get('#signup-password').type('Teste123@')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  });

  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-lastname').type('da Croce')
    cy.get('#signup-email').type('amanda1@teste.com')
    cy.get('#signup-phone').type('47555151511')
    cy.get('#signup-password').type('Teste123@')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  });

  it('Deve validar mensagem de erro com o campo sobrenome inválido', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Amanda')
    cy.get('#signup-email').type('amanda1@teste.com')
    cy.get('#signup-phone').type('47555151511')
    cy.get('#signup-password').type('Teste123@')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Sobrenome não pode estar vazio')
  });

  it('Deve validar mensagem de erro com o campo email vazio', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Amanda')
    cy.get('#signup-lastname').type('da Croce')
    cy.get('#signup-phone').type('47555151511')
    cy.get('#signup-password').type('Teste123@')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'E-mail não pode estar vazio')
  });

  it('Deve validar mensagem de erro com o campo email inválido', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Amanda')
    cy.get('#signup-lastname').type('da Croce')
    cy.get('#signup-email').type('amanda1.com')
    cy.get('#signup-phone').type('47555151511')
    cy.get('#signup-password').type('Teste123@')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  });

  it('Deve validar mensagem de erro com o campo email já cadastrado', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Amanda')
    cy.get('#signup-lastname').type('da Croce')
    cy.get('#signup-email').type('amanda1@teste.com')
    cy.get('#signup-phone').type('47555151511')
    cy.get('#signup-password').type('Teste123@')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado.')
  });

  it('Deve validar mensagem de erro com o campo senha fraca', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Amanda')
    cy.get('#signup-lastname').type('da Croce')
    cy.get('#signup-email').type('amanda10@teste.com')
    cy.get('#signup-phone').type('47555151511')
    cy.get('#signup-password').type('Teste1')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  });

  it('Deve validar mensagem de erro com o campo senha vazia', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Amanda')
    cy.get('#signup-lastname').type('da Croce')
    cy.get('#signup-email').type('amanda13@teste.com')
    cy.get('#signup-phone').type('47555151511')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Senha não pode estar vazia')
  });

  it('Deve validar mensagem de erro com o campo senha vazia', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('a').click()
  });


});


describe('US-015-Recomendações Diárias de Filmes', () => {
  it('Deve fazer a exibição de recomendações diárias de filmes em alta', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#recommendations')
      .find('img')  // Seleciona todas as imagens dentro da div
      .should(($imgs) => {
        // Verifica se o número de imagens está entre 4 e 5
        expect($imgs).to.have.length.within(4, 5)
      });
  });


  describe('US-001 - Busca de Filmes', () => {
    it('Deve buscar por Palavra-chave', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#search-input').type('Star Wars')
      cy.get('#search-button').click()
    });

    it('Deve buscar por palavra-chave e não encontrar', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#search-input').type('Rei leão')
      cy.get('#search-button').click()
      cy.get('#results-section').should('contain', 'Filme não encontrado.')
    });

    it('Deve limpar a busca', () => {
      cy.visit('http://127.0.0.1:8080/')
      cy.get('#clear-button')
    });

  });


});