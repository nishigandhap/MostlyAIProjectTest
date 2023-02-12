
class HomePageModel {

    elements = {

        firstName: () => cy.get('input[name="firstname"]'),
        lastName: () => cy.get('input[name="lastname"]'),
        email: () => cy.get('input[name="email"]'),
        phoneNumber: () => cy.get('input[name="mobilephone"]'),
        company: () => cy.get('input[name="company"]'),
        country: () => cy.get('select[name="country"]'),
        message: () => cy.get('textarea[name="message"]'),
        checkBox: () => cy.get('input[type="checkbox"]')
    }

    verifyBookmarks() {
        const selectors = [
            "#-mega-dropdown-3514-16 span",
            "#-mega-dropdown-2391-16 span",
            "#-mega-dropdown-3086-16 span",
            "#-mega-dropdown-3652-16 span"
        ];
        for (let i = 0; i < selectors.length; i++) {
            cy.get(selectors[i]).should('exist').first().each((element) => {
                const text = element.text()
                cy.log(text);
            });
        }
    }

    clickSearchButton() {
        cy.get('#open-header-search-1044-16-icon').click()
    }

    enterIncorrectTextInSearchField() {
        this.clickSearchButton()
        cy.get('.screen-reader-text').should('have.text', 'Search for:')
        cy.get('#CookieBoxSaveButton').click()
        cy.get('input[class="oxy-header-search_search-field"]').type('sythetic').type('{enter}')
        cy.intercept('POST', 'https://www.youtube-nocookie.com/api/stats/atr', {
            statusCode: 200,
            body: {}
        }).as('intercepted');

        cy.get('.ct-section-inner-wrap:visible').find('.ct-div-block').find('h1').should('contains.text', 'Sorry, no results for:sythetic')
        cy.get('input[class="oxy-header-search_search-field"]').clear({ force: true })
    }


    clickCompanyButton() {
        cy.get('#-mega-dropdown-3652-16').contains('Company').trigger('mouseover').click({ force: true })
        cy.get('#div_block-3670-16').contains('Contact').click({ force: true })
        cy.url().should('include', 'contact/')
    }

    enterDetailsInForm(firstName, lastName, email, phoneNumber, company, message) {
        cy.get('#CookieBoxSaveButton').click({ force: true })
        cy.get('h2[class="ct-headline has-decor"]').should('contain.text', 'Ask us anything!')
        this.elements.firstName().type(firstName)
        this.elements.lastName().type(lastName)
        this.elements.email().type(email)
        this.elements.phoneNumber().type(phoneNumber)
        this.elements.company().type(company)
        this.elements.country().select('Algeria')
        this.elements.message().type(message)
        this.elements.checkBox().filter(':visible').click()
    }

    hoverOnSendMessageButton() {
        cy.get('input[value="SEND MESSAGE"]').focus().should('be.focused')

    }
}

module.exports = new HomePageModel()