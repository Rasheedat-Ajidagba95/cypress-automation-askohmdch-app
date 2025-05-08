describe('Authentication', () => {
    beforeEach(()=>{
      cy.visit('/');
    }) 
    it('Viewing Orders and an Order Details', () => {
        cy.successfulLogin();
        cy.orderManagement();
      })
})