describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Step content #1').should('be.visible')

  })
})