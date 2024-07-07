import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'


//Scenario 1: Marks as Favorite [NEGATIVE]
Given('user visits movie page', () => {
    cy.visit('/')
    cy.wait(3000)
})

When('user select a indonesia languange', () => {
    cy.selectTranslate()
})

When('user select a movie', () => {
    cy.get('a.image[title="Space Cadet"]').click()
})

When('user click a favorite button', () => {
    cy.get('#favourite').click()
})

Then("movie can not mark as favorite and should have text {string}", () => {
    cy.get('li.tooltip.use_tooltip').then($assertion => {
        if($assertion.length > 0){
            cy.wrap($assertion[1]).title('eq', 'Masuk untuk menambahkan film ke daftar sukaan anda')
        }else{
            cy.log('Element is not found')
            cy.wait(3000)
        }})
    })


//Scenario 2: Scenario: Marks as Favorite [POSITIVE]
When('user select a ind languange', () => {
        cy.selectTranslate()
    })

When('user login to Application', () => {
    cy.fixture('loginData').then((user)=> {
        cy.login(user.validUser.username, user.validUser.password)
    cy.get('div.nav_wrapper').find('a.logo').click()
    })
})

When('user select a film', () => {
    cy.get('a.image[title="Kimetsu no Yaiba"]').click({force: true})
})

When('user click a fav button', () => {
    cy.get('#favourite').click()
    cy.wait(3000)
})

Then('user go to profile and check overview and select sub menu most favorite', () => {
    cy.overview()
})
           
Then('user select whether movie or serial tv', () => {
    cy.get('div.k-animation-container').find('a.k-link.k-menu-link').contains('a', 'Serial TV').click()
})
       
Then('user can see that movie should be in their favorite list', () => {
    cy.get('#results_page_1').should('exist')
    cy.title('eq', 'Kimetsu no Yaiba').should('exist')
    cy.wait(3000)
})


//Scenario 3: Scenario-Mark a Fews Movie into Favorite list
When('user select a fews movie for mark as favorite', () => {
    cy.selectTranslate()
    cy.fixture('loginData').then((user)=> {
        cy.login(user.validUser.username, user.validUser.password)
        cy.get('div.nav_wrapper').find('a.logo').click()
    })
    cy.movieHelper()
    cy.overview()
    cy.get('div.k-animation-container').find('a.k-link.k-menu-link').contains('a', 'Film').click()
})

Then('the movie should exist in their favorite list', () => {
    cy.get('#results_page_1').should('exist')
    cy.title('eq', 'Despicable Me 4').should('exist')
    cy.title('eq', 'The Boy and the Heron').should('exist')
    cy.wait(3000)
})


//Scenario 4: Scenario-Sorting movie in favorite list
When('user go to their favorite list and sorting the movie in their favorite list', () => {
    cy.selectTranslate()
    cy.fixture('loginData').then((user)=> {
        cy.login(user.validUser.username, user.validUser.password)
    })
    cy.get('#new_shortcut_bar').find('span.k-link.k-menu-link').then($element => {
            if($element.length > 0){
                cy.wrap($element[0]).click()
            }else {
                cy.log('Element is not found')
            }
        })
    cy.get('.group > :nth-child(2) > span.k-link').click()
    cy.get('div.k-animation-container').find('a.k-link.k-menu-link').contains('a', 'Film').click()
})

Then('the movie will sorted as their want', () => {
    //error code application "ga is not defined"
    cy.get('div.group_dropdown.filters').contains('span.text','Popularitas').click({force: true})
    cy.get('div.group_dropdown.sort')
    .find('.sort_order.selected.color_hover.pink.no_click').click()
    cy.get('#results_page_1').should('exist')
    cy.wait(3000)
    cy.get('div.group_dropdown.filters').contains('span.text','Tanggal Rilis').click({force: true})
    cy.get('a.sort_order.color_hover.pink.no_click.selected')
    .find('.sort_order.selected.color_hover.pink.no_click').click()
    cy.get('#results_page_1').should('exist')
    cy.wait(3000)
    cy.get('div.group_dropdown.filters').contains('span.text','Ditambahkan').click({force: true})
    cy.get('a.sort_order.color_hover.pink.no_click.selected')
    .find('.sort_order.selected.color_hover.pink.no_click').click()
    cy.get('#results_page_1').should('exist')
    cy.wait(3000)
})


//Scenario 5: Scenario-Remove Movie from Favorite list
When('user select a fews movie for remove from their favorite list', () => {
    cy.selectTranslate()
    cy.fixture('loginData').then((user)=> {
        cy.login(user.validUser.username, user.validUser.password)
        cy.get('div.nav_wrapper').find('a.logo').click()
    })
    cy.movieHelper()
})
       
When('user check into their movie favorite list', () => {
    cy.overview()
})
       
Then('the movie should not exist in their favorite list', () => {
    cy.get('#results_page_1').should('not.exist')
})
