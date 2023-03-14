describe('About page tests', () => {
  it('visits about page', () => {
    cy.visit('/about')
    cy.get('h2').should('have.text', 'About')
    cy.get('#github-link').should('have.text', 'Github repository')
    cy.get('#github-link').should(
      'have.attr',
      'href',
      'https://github.com/roopertti/my-vue3-typescript-broilerplate',
    )
  })
})
