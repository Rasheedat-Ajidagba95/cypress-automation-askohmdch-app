
describe('Authentication', () => {
    beforeEach(()=>{
      cy.visit('/');
    }) 
      it('Add products to cart and View Cart', () => {
       cy.AddToCartAndViewCart(); 
       cy.Checkout() 
    })
})