Cypress.Commands.add('movieHelper', () => {
    cy.get('a.image[title="Despicable Me 2"]').click()
    cy.get('#favourite').click()
    cy.get('div.nav_wrapper').find('a.logo').click()
    cy.wait(3000)
    cy.get('a.image[title="The Boy and the Heron"]').click()
    cy.get('#favourite').click()
    cy.get('div.nav_wrapper').find('a.logo').click()
    })