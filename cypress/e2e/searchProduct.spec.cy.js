describe('Search Products', () => {
    beforeEach(()=>{
      cy.visit('/');
    }) 
      it('Search Anchor bracelet', () => {
       cy.searchProduct1();  
    }) 
    it('Search Green TShirt', () => {
        cy.searchProduct2();  
     }) 
    it('Search Basic Blue jeans', () => {
            cy.searchProduct3();  
        })
    it('Search Red Shoes', () => {
            cy.searchProduct4();  
        })
    it('Search Black Over-the-shoulder Handbag', () => {
            cy.searchProduct5();  
        })
}) 