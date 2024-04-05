import {Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import GrupoEmpresarialActions from '../Actions/GrupoEmpresarialActions'

When(`preencho o campo {string} com o valor {string} na tela de Grupo Empresarial`, (param, valor) => {
    GrupoEmpresarialActions.fillField(param, valor)
});

Then(`armazeno o valor do ID na tela de Grupo Empresarial`, () => { 
    GrupoEmpresarialActions.saveData(); 
});