/// <reference types = "cypress"/ >

const HomePageModel = require("./Model/HomePageModel")


describe("Test suite", function () {

    beforeEach(function () {
        cy.visit(Cypress.env('url'))

    })
    it("Verify the bookmarks are visible", function () {
        HomePageModel.verifyBookmarks()

    })
    it("Enter incorrect bookmark and verify error message is displayed", function () {
        HomePageModel.enterIncorrectTextInSearchField()

    })
    it("Fill the details in fields and do click on send message button", function () {
        HomePageModel.clickCompanyButton()
        HomePageModel.enterDetailsInForm('Laxmi', 'Namah', 'laxmi@mostlyai.com', 978067665, 'AI', 'Thank you')
        HomePageModel.hoverOnSendMessageButton()

    })

})

