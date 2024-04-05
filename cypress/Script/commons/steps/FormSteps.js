import { Given } from 'cypress-cucumber-preprocessor/steps'

Given(`que clico no botão Novo no cabeçalho do formulário`, () => {
    cy.clickNewInFormButton();
});

Given(`que clico no botão Salvar no cabeçalho do formulário`, () => {
    cy.clickSaveButton();
});