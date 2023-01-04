/// <reference types="cypress" />

describe('react', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('learn react', () => {
    cy.get('a').last().should('have.text', 'Learn React')
  })
})
