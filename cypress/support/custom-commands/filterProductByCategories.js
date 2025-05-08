let filterProductByCategories

before(() =>{

    Cypress.on('uncaught:exception',()=>{
      return false
    })
    })
    before(()=>{
      cy.fixture("element").then((locators)=>{
        filterProductByCategories= locators.filterProductByCategories
        
      })
    })

    Cypress.Commands.add('filterByAccessoriesCategories', () => { 
        cy.get(filterProductByCategories.storeButton).should('be.visible').click();
        cy.get(filterProductByCategories.filterDropdown).select('accessories');
        cy.get(filterProductByCategories.categoryTitle).invoke('text').then((message)=> {
        expect(message).to.contain('Accessories')  
          cy.log(message)
        })
    })

    Cypress.Commands.add('filterByMenCategories', () => { 
        cy.get(filterProductByCategories.storeButton).should('be.visible').click();
        cy.get(filterProductByCategories.filterDropdown).select('men');
        cy.get(filterProductByCategories.categoryTitle).invoke('text').then((message)=> {
        expect(message).to.contain('Men')  
          cy.log(message)
        })
    })

    Cypress.Commands.add('filterByMenJeansCategories', () => { 
        cy.get(filterProductByCategories.storeButton).should('be.visible').click();
        cy.get(filterProductByCategories.filterDropdown).select("mens-jeans");
        cy.get(filterProductByCategories.categoryTitle).invoke('text').then((message)=> {
        expect(message).to.contain("Men's Jeans")  
          cy.log(message)
        })
    })

    Cypress.Commands.add('filterByMenShirtsCategories', () => { 
        cy.get(filterProductByCategories.storeButton).should('be.visible').click();
        cy.get(filterProductByCategories.filterDropdown).select("mens-shirts");
        cy.get(filterProductByCategories.categoryTitle).invoke('text').then((message)=> {
        expect(message).to.contain("Men's Shirts")  
          cy.log(message)
        })
    })

    Cypress.Commands.add('filterByMenShoesCategories', () => { 
        cy.get(filterProductByCategories.storeButton).should('be.visible').click();
        cy.get(filterProductByCategories.filterDropdown).select("mens-shoes");
        cy.get(filterProductByCategories.categoryTitle).invoke('text').then((message)=> {
        expect(message).to.contain("Men's Shoes")  
          cy.log(message)
        })
    })

    Cypress.Commands.add('filterByPurseAndBagCategories', () => { 
        cy.get(filterProductByCategories.storeButton).should('be.visible').click();
        cy.get(filterProductByCategories.filterDropdown).select("purses-and-handbags");
        cy.get(filterProductByCategories.categoryTitle).invoke('text').then((message)=> {
        expect(message).to.contain("Purses And Handbags")  
          cy.log(message)
        })
    })

    Cypress.Commands.add('filterByWomenCategories', () => { 
        cy.get(filterProductByCategories.storeButton).should('be.visible').click();
        cy.get(filterProductByCategories.filterDropdown).select('women');
        cy.get(filterProductByCategories.categoryTitle).invoke('text').then((message)=> {
        expect(message).to.contain('Women')  
          cy.log(message)
        })
    })

    Cypress.Commands.add('filterByWomenJeansCategories', () => { 
        cy.get(filterProductByCategories.storeButton).should('be.visible').click();
        cy.get(filterProductByCategories.filterDropdown).select("womens-jeans");
        cy.get(filterProductByCategories.categoryTitle).invoke('text').then((message)=> {
        expect(message).to.contain("Women's Jeans")  
          cy.log(message)
        })
    })

    Cypress.Commands.add('filterByWomenShirtsCategories', () => { 
        cy.get(filterProductByCategories.storeButton).should('be.visible').click();
        cy.get(filterProductByCategories.filterDropdown).select("womens-shirts");
        cy.get(filterProductByCategories.categoryTitle).invoke('text').then((message)=> {
        expect(message).to.contain("Women's Shirts")  
          cy.log(message)
        })
    })

    Cypress.Commands.add('filterByWomenShoesCategories', () => { 
        cy.get(filterProductByCategories.storeButton).should('be.visible').click();
        cy.get(filterProductByCategories.filterDropdown).select("womens-shoes");
        cy.get(filterProductByCategories.categoryTitle).invoke('text').then((message)=> {
        expect(message).to.contain("Women's Shoes")  
          cy.log(message)
        })
    })

