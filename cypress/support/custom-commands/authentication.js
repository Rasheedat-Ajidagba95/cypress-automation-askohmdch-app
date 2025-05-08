import {faker} from '@faker-js/faker'
let signup
let login

const serverID = 'xeqhj7hw'
const emailDomain= '@xeqhj7hw.mailosaur.net'
let emailAddress
before(() =>{

    Cypress.on('uncaught:exception',()=>{
      return false
    })
    })
before(()=>{
    cy.fixture("element").then((locators)=>{
      signup= locators.signup
      login= locators.login
      })
    })
    const randomString= new Date().getTime()
    emailAddress= `${randomString}${emailDomain}`
   
Cypress.Commands.add('sucessfulSignup', () => { 
    cy.get(signup.accountButton).should('be.visible').click();
    cy.get(signup.usernameField).should('be.visible').type(faker.person.firstName());
    cy.get(signup.emailField).should('be.visible').type(emailAddress);
    // cy.get(signup.emailField).should('be.visible').type("rashtester34@yopmail.com");
    cy.get(signup.passwordField).should('be.visible').type(faker.internet.password());
    cy.get(signup.registerButton).should('be.visible').click();
    cy.get(signup.signupMessage).invoke('text').then((message)=> {
    expect(message).to.contain('From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.')  
      cy.log(message)
    })
    
})
Cypress.Commands.add('unsuccesfulSignup', () => { 
    cy.get(signup.accountButton).should('be.visible').click();
    cy.get(signup.usernameField).should('be.visible').type(faker.person.firstName());
    cy.get(signup.emailField).should('be.visible').type("rashtester100@yopmail.com");
    cy.get(signup.passwordField).should('be.visible').type(faker.internet.password());
    cy.get(signup.registerButton).should('be.visible').click();
    cy.get(signup.invalidSignupMessage).invoke('text').then((message)=> {
    expect(message).to.contain('Error: An account is already registered with your email address. Please log in.')  
      cy.log(message)
    })
})
Cypress.Commands.add('successfulLogin', () => { 
    cy.get(login.accountButton).should('be.visible').click();
    cy.get(login.emailField).should('be.visible').type("rashtester100@yopmail.com");
    cy.get(login.passwordField).should('be.visible').type("more@4me");
    cy.get(login.loginButton).should('be.visible').click();
    cy.get(login.loginMessage).invoke('text').then((message)=> {
    expect(message).to.contain('From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.')  
      cy.log(message)
    })
  })
  Cypress.Commands.add('unsuccessfulLogin', () => { 
    cy.get(login.accountButton).should('be.visible').click();
    cy.get(login.emailField).should('be.visible').type("rashtester101@yopmail.com");
    cy.get(login.passwordField).should('be.visible').type("more@4me");
    cy.get(login.loginButton).should('be.visible').click();
    cy.get(login.unsuccessfulLoginMessage).invoke('text').then((message)=> {
    expect(message).to.contain('Unknown email address. Check again or try your username.')  
  cy.log(message)
})
})
          
