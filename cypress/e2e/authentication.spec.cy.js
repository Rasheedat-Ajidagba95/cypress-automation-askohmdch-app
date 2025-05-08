
describe('Authentication', () => {
beforeEach(()=>{
  cy.visit('/');
}) 
it.only('Signup Using valid credentials', () => {
   cy.sucessfulSignup();  
})
it('Signup Using Invalid Credentials', () => {
  cy.unsuccesfulSignup(); 
})
it('Login Using valid credentials', () => {
  cy.successfulLogin();
})
it('Login Using Invalid Credentials', () => {
  cy.unsuccessfulLogin();
})
})
