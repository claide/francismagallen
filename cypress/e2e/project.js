describe('project', () => {
  it('should be clickable on home', () => {
    cy.visit('/').waitForRouteChange()
    cy.findByText(/Covidph/i)
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/work/covidph')
  })
  it('should have its content', () => {
    cy.visit('/work/covidph').waitForRouteChange()
    cy.get('header').within(() => {
      cy.findByText(/Covidph/i)
      cy.findByText(/HTML/i)
    })
  })
  it('should have working recent projects', () => {
    cy.visit('/work/covidph').waitForRouteChange()
    cy.get('main').within(() => {
      cy.findByText(/The Covidph/i)
    })
  })
})
