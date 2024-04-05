Cypress.Commands.add('SetMenuFixed', () => {
    cy.wait(2000);
    cy.get('.button-img.ng-tns-c103-1').click();
});

Cypress.Commands.add('SetMenuPrincipal', (menuPrincipal) => {
    cy.wait(2000);
    cy.contains('.menus-sidenav a', menuPrincipal).should('exist').click();
});

Cypress.Commands.add('SetMenu', (menu) => {
    cy.wait(2000);
    cy.contains('.item', menu).should('exist').click();
});

Cypress.Commands.add('SetSubMenu', (subMenu) => {
    cy.contains('.ng-star-inserted a', subMenu).should('exist').click();
    cy.wait(2000);
    cy.url().should('not.eq', Cypress.config().baseUrl);
});