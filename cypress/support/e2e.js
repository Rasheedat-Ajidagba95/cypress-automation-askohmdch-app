// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the signupation of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-mailosaur'
import './commands'
import 'cypress-fill-command'
import './custom-commands/authentication'
import './custom-commands/searchProduct'
import './custom-commands/filterProductByCategories'
import './custom-commands/sortProducts'
import './custom-commands/cartAndCheckout'
import './custom-commands/orderManagement'