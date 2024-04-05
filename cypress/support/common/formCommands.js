Cypress.Commands.add('clickSaveButton', () => {
    cy.wait(200)
    cy.get('header-form')
    .find('.btn-salvar')
    .should('be.visible')
    .click();
});

Cypress.Commands.add('clickNewInFormButton', () => {
    cy.wait(200)
    cy.get('header-form')
    .find('.btn-novo-default')
    .should('be.visible')
    .click();
});

Cypress.Commands.add('getCurrentFormId', () => {
    cy.wait(200)
    cy.get('header-form')
    .find('.codigo-format').then(($id) => {
        return $id.text();
    });
});