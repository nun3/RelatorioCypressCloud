import TipoPessoaElement from "../ElementsMaps/TipoPessoaElementsMaps.json";

export class TipoPessoaAction {

  SetEditText(value, labelCaption) {
    cy.get(TipoPessoaElement.TipoPessoaLocators.IdFormGroup).within(() => {
      cy.findByLabelText(labelCaption).clear().type(value).then(($element) => {
        const typedValue = $element.val();
        expect(typedValue).to.equal(value);
      });
    });
  }

  ValidaStatus(status){
    cy.get(TipoPessoaElement.TipoPessoaLocators.CheckStatus).contains(status,{timeout:3000})
  }

  Saveid(){
    cy.getCurrentFormId().then(id => cy.saveId(parseInt(id)));
  }

  CheckItemForm(){
    cy.url().should('contain', 'https://erp-homologacao.viasoft.com.br/pt/fiscal/tipo-pessoa');
  }
}