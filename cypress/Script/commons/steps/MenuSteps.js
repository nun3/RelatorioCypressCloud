import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given(`que cliquei no menu Mostrar e Ocultar`, () => {
    cy.SetMenuFixed();
});

Given(`que cliquei no menu principal {string}`, (menuPrincipal) => {
    cy.SetMenuPrincipal(menuPrincipal);
});

Given(`que cliquei no menu {string}`, (menu) => {
    cy.SetMenu(menu)
});

Then(`clico no menu principal {string}`, (menuPrincipal) => {
    cy.SetMenuPrincipal(menuPrincipal)
});

Given(`que cliquei no sub-menu {string}`, (subMenu) => {
    cy.SetSubMenu(subMenu)
});