/// <reference types= "cypress" />



describe('template spec', () => {
  it('passes', () => {

    let website = ["https://global.almosafer.com/en","https://global.almosafer.com/ar"]

    let websiteindex = Math.floor(Math.random()*website.length)
    cy.visit(website[websiteindex])
    cy.get('.cta__saudi').click()
  })
})