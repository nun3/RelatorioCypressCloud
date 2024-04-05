import { Before } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
    cy.Login(Cypress.env('username'), Cypress.env('password'));
});