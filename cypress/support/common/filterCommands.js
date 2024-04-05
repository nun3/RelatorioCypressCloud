Cypress.Commands.add('fillFieldsInFilterScreen', (fieldReference, fieldValue) => {
    cy.log(Cypress.env('idGlobal'));
    fieldValue = fieldValue === 'CONTEXTO[IDGLOBAL]' ? Cypress.env('idGlobal') : fieldValue;
    cy.log(fieldValue);
    cy.get('.p-sidebar-content')
        .find('label')
        .contains(fieldReference)
        .should('be.visible')
        .type(fieldValue);
});

Cypress.Commands.add('clickSubmitButtonInFilterScreen', () => {
    cy.wait(200)
    cy.get('.p-sidebar-content')
    .find('.btn-confirm')
    .contains('Filtrar')
    .click();
});