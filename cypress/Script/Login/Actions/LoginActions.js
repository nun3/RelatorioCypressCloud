import loginElementsMaps from '../ElementsMaps/LoginElementsMaps.json'

class LoginActions {
    logout() {
        cy.get(loginElementsMaps.LoginPageLocators.PERFIL)
            .should('exist')
            .should('be.visible')
            .click();

        cy.get(loginElementsMaps.LoginPageLocators.BTNSAIR)
            .should('exist')
            .should('be.visible')
            .click();

        cy.url().should('include', '/login');
    }

    setEditText(elementLocator, value) {
        // Verifique se o elemento existe, é visível e está habilitado
        cy.get(elementLocator)
            .should('exist')
            .should('be.visible')
            .should('be.enabled')
            .focus()
            .clear()
            .type(value)
            .should('have.value', value);
    }

    clickButton(elementLocator) {
        // Verifique se o botão existe e é visível
        cy.get(elementLocator)
            .should('exist')
            .should('be.visible')
            .click({ force: true });
    }

    verifyMessage(elementLocator, expectedMessage) {
        // Verifique se o elemento existe e é visível 
        cy.get(elementLocator)
            .should('exist')
            .should('be.visible')
            .invoke('text')
            .should('eq', expectedMessage);
    }
}
export default new LoginActions();
