describe('searchProduct', () => {
    beforeEach(()=>{
      cy.visit('/');
    }) 
    it('Default Products Sorting', () => {
        cy.defaultSorting();  
    })
    it('Sorting Products By Populating', () => {
        cy.sortByPopularity();  
    })
    it('Sorting Products By Average Rating', () => {
        cy.sortByAverageRating();  
    })
    it('Sorting Products By Latest', () => {
        cy.sortByLatest();  
    })
    it('Sorting Products By Price Low to High', () => {
        cy.sortByPriceLowToHigh();  
    })
    it('Sorting Products By Price High to Low', () => {
        cy.sortByPriceHighToLow();  
    })
})