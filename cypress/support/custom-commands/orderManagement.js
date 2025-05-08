let orderManagement

before(() =>{

    Cypress.on('uncaught:exception',()=>{
      return false
    })
    })
    before(()=>{
      cy.fixture("element").then((locators)=>{
        orderManagement= locators.orderManagement
        
      })
    })

    Cypress.Commands.add('orderManagement', () => { 
        cy.get(orderManagement.orderButton).should('be.visible').click();
        cy.get(orderManagement.orderDetailsButton).should('be.visible').click();
        cy.get(orderManagement.orderDetailsTitle).invoke('text').then((message)=> {
        expect(message).to.contain('Order details')  
          cy.log(message)
        })
    })
