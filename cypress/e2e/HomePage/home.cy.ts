describe('Home page tests', () => {
  it('visits home page', () => {
    cy.visit('/')
    cy.get('h1').should('have.text', 'Vue 3 broilerplate')
    cy.get('h2').should('have.text', 'Posts')
    cy.get('[data-testid="postlist-loading-text"]').should('be.visible')
    cy.wait(200)
    cy.get('[data-testid="postitem"]').should('have.length', 10)
  })
})
