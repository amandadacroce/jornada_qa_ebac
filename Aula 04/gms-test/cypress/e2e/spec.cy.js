describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8080/')

    cy.get('#signup-firstname').type('Amanda')
    cy.get('#signup-lastname').type('da Croce')
    cy.get('#signup-email').type('amanda@teste.com')
    cy.get('#signup-phone').type('47555151511')
    cy.get('#signup-password').type('Teste123@')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})