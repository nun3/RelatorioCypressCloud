class GrupoEmpresarialActions {
    getField(fieldName) {
        return cy.get('.p-card-content') // Encontra o container principal
                .find('label') // Encontra todos os labels dentro do container
                .contains(fieldName) // Localiza o label específico com o texto fornecido
                .siblings('p-inputmask, input') // Encontra o campo de entrada associado ao label, considerando tanto p-inputmask quanto input
                .should('be.visible') // Verifica se o campo de entrada está visível    
    }

    fillField(fieldName, value) {
            this.getField(fieldName)
            .clear() // Limpa o conteúdo atual do campp
            .type(fieldName === 'Raiz CNPJ' ? (Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) + 10000000000000).toString() : value); //
    }

    saveData(){
        cy.getCurrentFormId().then(id => cy.saveId(parseInt(id)));
    }
}
export default new GrupoEmpresarialActions 