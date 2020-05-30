describe('home', () => {
  beforeEach(() => {
    cy.visit('/').waitForRouteChange()
  })

  it('should have the hero content', () => {
    cy.findAllByText(/francisMagallen/i)
    cy.findByText(/I'm Francis./i)
  })

  // it('should have recent posts', () => {
  //   cy.findByText(/A Lannister always pays his debt/i)
  // })

  it('should have recent projects', () => {
    cy.findByText(/Outstanding first impression/i)
  })

  it('should have a footer', () => {
    cy.findByText(/FRANCIS MAGALLEN/i)
  })
})
