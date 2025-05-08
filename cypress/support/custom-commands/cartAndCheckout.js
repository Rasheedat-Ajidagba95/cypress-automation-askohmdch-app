let cartAndCheckout

before(() =>{

    Cypress.on('uncaught:exception',()=>{
      return false
    })
    })
    before(()=>{
      cy.fixture("element").then((locators)=>{
        cartAndCheckout= locators.cartAndCheckout
        
      })
    })
    Cypress.Commands.add('AddToCartAndViewCart', () => { 
        cy.get(cartAndCheckout.storeButton).should('be.visible').click();
        cy.get(cartAndCheckout.addFirstItemToCartButton).should('be.visible').click();
        cy.get(cartAndCheckout.addFirstItemToCartButton).should('exist'); 
        cy.wait(2000)
        cy.get(cartAndCheckout.addSecondItemToCartButton).should('be.visible').click();
        cy.get(cartAndCheckout.addSecondItemToCartButton).should('exist'); 
        cy.wait(2000)
        cy.get(cartAndCheckout.viewCartButton).should('be.visible').click();
        cy.get(cartAndCheckout.cartTitle).invoke('text').then((message)=> {
        expect(message).to.contain('Cart')  
        cy.log(message)


  
})
})
    Cypress.Commands.add('Checkout', () => { 
        cy.get(cartAndCheckout.checkoutButton).should('be.visible').click();
        cy.get(cartAndCheckout.firstNameField).should('be.visible').type("RashTester");
        cy.get(cartAndCheckout.lastNameField).should('be.visible').type("Tester");
        cy.get(cartAndCheckout.selectCountryDropdown).should('be.visible').click();
        cy.get(cartAndCheckout.searchCountryField)
        .should('be.visible')
        .type("Nigeria{enter}"); 
        cy.get(cartAndCheckout.addressField).should('be.visible').type("No 1, Test Street");
        cy.get(cartAndCheckout.cityField).should('be.visible').type("Ilorin");
        cy.get(cartAndCheckout.selectStateDropdown).should('be.visible').click();
        cy.get(cartAndCheckout.searchStateField)
        .should('be.visible')
        .type("Kwara{enter}");
        cy.get(cartAndCheckout.emailField).should('be.visible').type("rashTester@yopmail.com");
        cy.get(cartAndCheckout.placeOrderButton).should('be.visible').click();
        cy.get(cartAndCheckout.orderDetailsTitle).invoke('text').then((message)=> {
        expect(message).to.contain('Order details')  
          cy.log(message)
      
        }) 

}) 