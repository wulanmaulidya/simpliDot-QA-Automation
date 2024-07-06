Cypress.Commands.add('overview', () => {
cy.get('li.user').scrollIntoView().click()
    cy.contains('a', 'Lihat Profil').click({force: true})
    cy.wait(3000)
    cy.get('#new_shortcut_bar').find('span.k-link.k-menu-link').then($element => {
        if($element.length > 0){
            cy.wrap($element[0]).click()
        }else {
            cy.log('Element is not found')
        }
    })
})