 describe('First test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  

   })

  it('passes', () => {
     cy.contains('Layout').should('be.visible')

   })
})   