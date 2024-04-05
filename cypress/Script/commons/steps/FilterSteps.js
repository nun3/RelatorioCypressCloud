import { Given } from 'cypress-cucumber-preprocessor/steps';

Given(`clico no botão Filtrar na tela de Filtros`, () => { 
    cy.clickSubmitButtonInFilterScreen();
});

Given(`preencho o campo {string} com valor {string} na tela de Filtros`, (field, value) => { 
    cy.fillFieldsInFilterScreen(field, value) 
});