/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros ', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() =>{
    cy.screenshot() 
  });

  
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `amanda${Date.now()}@teste.com`
    cy.preencherCadastro('amanda', 'croce', email, '1215421355', 'Teste123@')
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
    cy.preencherCadastro('amanda', 'croce', email, '11554654315', ' ')
    cy.get('#signup-response').should('contain', 'Senha não pode estar vazia')
  });

});
