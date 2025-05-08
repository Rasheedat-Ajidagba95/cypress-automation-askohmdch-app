let searchProduct


before(() =>{

    Cypress.on('uncaught:exception',()=>{
      return false
    })
    })
    before(()=>{
      cy.fixture("element").then((locators)=>{
        searchProduct= locators.searchProduct
        
      })
    })
Cypress.Commands.add('searchProduct1', () => { 
    cy.get(searchProduct.storeButton).should('be.visible').click();
    cy.get(searchProduct.searchField).should('be.visible').type("Anchor bracelet");
    cy.get(searchProduct.searchButton).should('be.visible').click();
    cy.get(searchProduct.productTitle).should('exist').and('be.visible')
    cy.get(searchProduct.productDescription).should('exist').and('be.visible')
    
})
Cypress.Commands.add('searchProduct2', () => { 
    cy.get(searchProduct.storeButton).should('be.visible').click();
    cy.get(searchProduct.searchField).should('be.visible').type("Green TShirt");
    cy.get(searchProduct.searchButton).should('be.visible').click();
    cy.get(searchProduct.productDescription).should('exist').and('be.visible')
    
})
Cypress.Commands.add('searchProduct3', () => { 
    cy.get(searchProduct.storeButton).should('be.visible').click();
    cy.get(searchProduct.searchField).should('be.visible').type("Basic Blue jeans");
    cy.get(searchProduct.searchButton).should('be.visible').click();
    cy.get(searchProduct.productTitle).should('exist').and('be.visible')
    cy.get(searchProduct.productDescription).should('exist').and('be.visible')
    
})
Cypress.Commands.add('searchProduct4', () => { 
    cy.get(searchProduct.storeButton).should('be.visible').click();
    cy.get(searchProduct.searchField).should('be.visible').type("Red Shoes");
    cy.get(searchProduct.searchButton).should('be.visible').click();
    cy.get(searchProduct.productTitle).should('exist').and('be.visible')
    cy.get(searchProduct.productDescription).should('exist').and('be.visible')
    
})
Cypress.Commands.add('searchProduct5', () => { 
    cy.get(searchProduct.storeButton).should('be.visible').click();
    cy.get(searchProduct.searchField).should('be.visible').type("Black Over-the-shoulder Handbag");
    cy.get(searchProduct.searchButton).should('be.visible').click();
    cy.get(searchProduct.productTitle).should('exist').and('be.visible')
    cy.get(searchProduct.productDescription).should('exist').and('be.visible')
    
})
