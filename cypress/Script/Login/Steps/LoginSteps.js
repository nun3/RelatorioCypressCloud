import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginActions from '../Actions/LoginActions';
import loginElementsMaps from '../../../Script/Login/ElementsMaps/LoginElementsMaps.json'


Given('que sai da página de Login', () => {
  LoginActions.logout();
});

When("informo um CPF válido {string}", (cpf) => {
  LoginActions.setEditText(loginElementsMaps.LoginPageLocators.USERNAME, cpf);
});

When("informo uma senha {string}", (senha) => {
  LoginActions.setEditText(loginElementsMaps.LoginPageLocators.PASSWORD, senha);
});

When("pressiono o botão de Login", () => {
 LoginActions.clickButton(loginElementsMaps.LoginPageLocators.BTN_LOGIN);
});

Then('vejo o código da empresa {string} na página logada', (codemp) => {
 LoginActions.verifyMessage(loginElementsMaps.LoginPageLocators.COD_EMP, codemp);
});

When("pressiono o botão de Recuperação de Senha", () => {
  LoginActions.clickButton(loginElementsMaps.LoginPageLocators.RECUPERARSENHA);
});

When("pressiono o botão para enviar e-mail", () => {
  LoginActions.clickButton(loginElementsMaps.LoginPageLocators.ENVEMAIL);
});

Then("vejo o aviso de Recuperação de senha {string}", (aviso) => {
  LoginActions.verifyMessage(loginElementsMaps.LoginPageLocators.ERROEMAIL, aviso);
});

Then("vejo o aviso {string}", (aviso) => {
  LoginActions.verifyMessage(loginElementsMaps.LoginPageLocators.ERROLOGIN, aviso);
});

Then("vejo o aviso de campo {string}", (aviso) => {
  LoginActions.verifyMessage(loginElementsMaps.LoginPageLocators.OBRIGATORIO, aviso);
});