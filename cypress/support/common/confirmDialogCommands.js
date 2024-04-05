Cypress.Commands.add('clickInDialogConfirmation', (refence) => {
    cy.get('button.p-button').contains('span', refence).invoke('prop', 'textContent').should('equal', refence)
    cy.get('button.p-confirm-dialog-accept').click();
}); 

Cypress.Commands.add('waitDialogConfirmation', () => {
    cy.contains('.p-confirm-dialog-message', 'Tem certeza que deseja excluir?', {timeout:4000})
}); 

Cypress.Commands.add('waitMessageStatus', (status) => {
    cy.get('.p-toast-message-content').contains(status,{timeout:4000})
}); 


