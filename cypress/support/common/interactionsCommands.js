Cypress.Commands.add('selectOption', (param, valor) => {
    // Seleciona o elemento da classe
    cy.get('.p-card-content')
        // Procura por um elemento com a classe '.form-group' dentro do '.p-card-content'
        .find('.form-group')
        // Procura por um elemento que contenha o texto passado por parâmetro
        .contains(param)
        // Após encontrar o elemento com o texto do parâmetro, executa o seguinte bloco de código
        .then(($param) => {
            // Verifica se o elemento tem um irmão com a classe 'p-autocomplete'
            if ($param.siblings('p-autocomplete').length > 0) {
                // Se o irmão for um p-autocomplete, encontra e clica no dropdown do p-autocomplete
                cy.wrap($param)
                    .siblings('p-autocomplete')
                    .find('.p-autocomplete-dropdown')
                    .focus() // Foca no elemento dropdown
                    .click(); // Clica no dropdown

                // Depois que o dropdown é aberto, procura pelo item que contém o valor especificado
                cy.get('ul[role="listbox"]')
                    .find('li[role="option"]')
                    .contains(valor)
                    .should('be.visible') // Verifica se o item é visível
                    .click({ force: true }); // Clica no item (usando { force: true } para forçar o clique)

            } else if ($param.siblings('p-dropdown').length > 0) {
                // Se o irmão for um p-dropdown, encontra e clica no botão de dropdown
                cy.wrap($param)
                    .siblings('p-dropdown')
                    .find('div[role="button"]')
                    .click();

                // Depois que o dropdown é aberto, procura pelo item que contém o valor especificado
                cy.get('ul[role="listbox"]')
                    .find('p-dropdownitem')
                    .contains(valor)
                    .click({ force: true }); // Clica no item (usando { force: true } para forçar o clique)

                // Verifica se o item clicado é visível
                cy.get('p-dropdownitem')
                    .contains(valor)
                    .should('be.visible')
                    .click({ force: true }); // Clica no item (usando { force: true } para forçar o clique)

            } else {
                // Se nenhum dos elementos irmãos corresponder aos tipos suportados, lança um erro
                throw new Error('Tipo de componente não suportado');
            }
        });
});