import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { TipoPessoaAction } from '../Actions/TipoPessoaActions';

const TipoPessoaAct = new TipoPessoaAction

Given('que acessei o formulário de Tipo de Pessoa', () => {
    TipoPessoaAct.CheckItemForm()
});

When(`preencho o valor {string} no campo {string} na tela de Tipo de Pessoa`, (value, labelCaption) => {
    TipoPessoaAct.SetEditText(value, labelCaption)
});

Then(`armazeno o valor do ID na tela de Tipo de Pessoa`, () => {
    TipoPessoaAct.Saveid();
});
