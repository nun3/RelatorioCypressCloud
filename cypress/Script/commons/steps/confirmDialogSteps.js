import { Then } from 'cypress-cucumber-preprocessor/steps'

Then(`aguardo o Dialogo de Confirmação de Exclusão`, () => {
    cy.waitDialogConfirmation();
});

Then(`clico em {string} no Dialogo de Confirmação de Exclusão`, (reference) => {
    cy.clickInDialogConfirmation(reference);
});

Then(`aguardo o status {string}`, (status) => {
    cy.waitMessageStatus(status)
});
