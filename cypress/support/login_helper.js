Cypress.Commands.add('login', (username, password) => {
    cy.get('ul.primary').find('li').contains('a','Masuk').click()
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#login_button').click()
  })
