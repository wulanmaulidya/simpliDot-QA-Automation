Cypress.Commands.add('selectTranslate', () => {
    cy.get('button.onetrust-close-btn-handler.onetrust-close-btn-ui.banner-close-button.ot-close-icon').click()
    cy.get('li.translate').click()
    cy.get('span.k-dropdown-wrap.k-state-default').then($widgets => {
        if ($widgets.length > 0) {
          cy.wrap($widgets[0]).click({force: true})
        } else {
          cy.log('Widget is not found')
          cy.wait(3000)
        }})
    cy.get('input.k-textbox').then($element => {
        if($element.length > 0) {
            cy.wrap($element[0]).type('indonesia{enter}', {force: true})
        }else {
            cy.log('Element is not found')
        }})
    cy.get('a.no_click.button.rounded.upcase').click({force: true})
    cy.wait(3000)
})