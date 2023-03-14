describe('Not found page tests', () => {
  it('visits not found page', () => {
    cy.visit('/route-that-cannot-be-found')
    cy.get('h2').should('have.text', 'Not found')
  })
})