describe('Filter Products By Categories', () => {
    beforeEach(()=>{
      cy.visit('/');
    }) 
      it('Filter Products By Accessories Categories', () => {
       cy.filterByAccessoriesCategories();  
    }) 
    it('Filter Products By Men Categories', () => {
        cy.filterByMenCategories();  
     })

    it("Filter Products By Men's Jeans Categories", () => {
        cy.filterByMenJeansCategories();  
     })

     it("FilterProducts ByMenShirtsCategories", () => {
        cy.filterByMenShirtsCategories();  
     })

     it("Filter Products By Men's Shoes Categories", () => {
        cy.filterByMenShoesCategories();  
     })

     it('Filter Products By Purse And Bag Categories', () => {
        cy.filterByPurseAndBagCategories();  
     })

     it('Filter Products By Women Categories', () => {
        cy.filterByWomenCategories();  
     })

     it('Filter Products By Women Jeans Categories', () => {
        cy.filterByWomenJeansCategories();  
     })

     it("Filter Products By Women's Shirts Categories", () => {
        cy.filterByWomenShirtsCategories();  
     })

     it("Filter Products By Women's Shoes Categories", () => {  
        cy.filterByWomenShoesCategories();  
     })

     

})