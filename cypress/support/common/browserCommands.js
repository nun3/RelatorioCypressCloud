Cypress.Commands.add('clickFilterButton', () => {
    cy.wait(200)
    cy.get('app-header-grid')
    .find('.btn-filtrar')
    .should('be.visible')
    .click();
});

Cypress.Commands.add('clickNewButton', () => {
    cy.wait(200)
    cy.get('app-header-grid')
    .find('.btn-novo')
    .should('be.visible')
    .click();
});

Cypress.Commands.add('clickFirstRowGrid', (refence) => {
    refence = refence === 'CONTEXTO[IDGLOBAL]' ? Cypress.env('idGlobal') : refence;
    cy.get('td.column-row-Data div').contains(refence).click();
}); 

Cypress.Commands.add('clickExcludeFirstRowGrid', (refence) => {
    refence = refence === 'CONTEXTO[IDGLOBAL]' ? Cypress.env('idGlobal') : refence;
    cy.get('td.column-row-Data').contains(refence).parent().parent().find('app-remover').click();
}); 
