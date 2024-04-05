Cypress.Commands.add('saveId', (id) => {
    // Armazena o ID em uma variável global chamada 'idGlobal'
    Cypress.env('idGlobal', id);
    cy.log(`Salvo o idGlobal: ${id}`);
});