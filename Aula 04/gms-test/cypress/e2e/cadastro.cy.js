/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros ', () => {

  beforeEach(() => {
    cy.visit('/')
  });


  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `amanda${Date.now()}@teste.com`
    cy.preencherCadastro('amanda', 'croce', email, null, 'Teste123@')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  });


  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('amanda10', 'croce', 'teste@teste1111.com', '11554654315', 'Teste123@')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });

  it('Deve validar mensagem de erro com o campo sobrenome inválido', () => {
    cy.preencherCadastro('amanda', 'croce10', 'teste@teste121.com', '11554654315', 'Teste123@')
    cy.get('#signup-response').should('contain', 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });

  it('Deve validar mensagem de erro com o campo email vazio', () => {
    cy.preencherCadastro('amanda', 'croce', ' ', '11554654315', 'Teste123@')
    cy.get('#signup-response').should('contain', 'E-mail não pode estar vazio')
  });

  it('Deve validar mensagem de erro com o campo email inválido', () => {
    cy.preencherCadastro('amanda', 'croce', 'a@a', '11554654315', 'Teste123@')
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  });

  it('Deve validar mensagem de erro com o campo email já cadastrado', () => {
    cy.preencherCadastro('amanda', 'croce', 'amanda1@teste.com', '11554654315', 'Teste123@')
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado.')
  });

  it('Deve validar mensagem de erro com o campo senha fraca', () => {
    var email = `amanda${Date.now()}@teste.com`
    cy.preencherCadastro('amanda', 'croce', email, '11554654315', 'Teste12')
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  });

  it('Deve validar mensagem de erro com o campo senha vazia', () => {
    var email = `amanda${Date.now()}@teste.com`
    cy.preencherCadastro('amanda', 'croce', email, '11554654315', null)
    cy.get('#signup-response').should('contain', 'Senha não pode estar vazia')
  });

  it.only('Deve validar link de política de privacidade', () => {
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