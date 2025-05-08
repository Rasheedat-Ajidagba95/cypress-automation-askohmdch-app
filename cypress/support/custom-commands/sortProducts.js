
let sortProduct;


before(() =>{

    Cypress.on('uncaught:exception',()=>{
      return false
    })
    })
    before(()=>{
      cy.fixture("element").then((locators)=>{
        sortProduct= locators.sortProduct
        
      })
    })
    
    Cypress.Commands.add('defaultSorting', () => { 
        cy.get(sortProduct.storeButton).should('be.visible').click();
        cy.get(sortProduct.sortDropdown).select('Default sorting');
})
    Cypress.Commands.add('sortByPopularity', () => { 
    cy.get(sortProduct.storeButton).should('be.visible').click();
    cy.get(sortProduct.sortDropdown).select('Sort by popularity');
})
    Cypress.Commands.add('sortByAverageRating', () => { 
    cy.get(sortProduct.storeButton).should('be.visible').click();
    cy.get(sortProduct.sortDropdown).select('Sort by average rating');
})
    Cypress.Commands.add('sortByLatest', () => { 
    cy.get(sortProduct.storeButton).should('be.visible').click();
    cy.get(sortProduct.sortDropdown).select('Sort by latest');
})
    Cypress.Commands.add('sortByPriceLowToHigh', () => { 
    cy.get(sortProduct.storeButton).should('be.visible').click();
    cy.get(sortProduct.sortDropdown).select('Sort by price: low to high');
})
    Cypress.Commands.add('sortByPriceHighToLow', () => { 
    cy.get(sortProduct.storeButton).should('be.visible').click();
    cy.get(sortProduct.sortDropdown).select('Sort by price: high to low');
})
    
   
