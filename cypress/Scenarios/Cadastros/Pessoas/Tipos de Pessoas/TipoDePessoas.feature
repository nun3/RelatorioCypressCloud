# language: pt

Funcionalidade: Cadastro de Tipo de Pessoas

Contexto: Acessar Módulo
    Dado que cliquei no menu Mostrar e Ocultar
    E que cliquei no menu principal 'Cadastros'
    E que cliquei no menu "Pessoas"
    E que cliquei no sub-menu "Tipo de Pessoa"

@BomCaminho @CRUD
Cenário: Cadastro de Tipo de Pessoa
    Dado que acessei o formulário de Tipo de Pessoa
    E que clico no botão Novo no cabeçalho de filtro
    E preencho o valor 'Tipo Pessoa teste 1' no campo 'Descrição' na tela de Tipo de Pessoa
    E que clico no botão Salvar no cabeçalho do formulário
    E aguardo o status 'Salvo com sucesso'
    Então armazeno o valor do ID na tela de Tipo de Pessoa

@BomCaminho @CRUD
Cenário: Edição de Tipo de Pessoa
    Dado que acessei o formulário de Tipo de Pessoa
    E que clico no botão Filtrar no cabeçalho de filtro
    E preencho o campo 'Código' com valor 'CONTEXTO[IDGLOBAL]' na tela de Filtros
    E clico no botão Filtrar na tela de Filtros
    E clico na linha com o valor 'CONTEXTO[IDGLOBAL]' no grid do Browser
    Quando preencho o valor 'Tipo Pessoa teste editado' no campo 'Descrição' na tela de Tipo de Pessoa
    E que clico no botão Salvar no cabeçalho do formulário
    Então aguardo o status 'Salvo com sucesso'

@BomCaminho @CRUD
Cenário: Exclusão de Tipo de Pessoa
    Dado que acessei o formulário de Tipo de Pessoa
    E que clico no botão Filtrar no cabeçalho de filtro
    E preencho o campo 'Código' com valor 'CONTEXTO[IDGLOBAL]' na tela de Filtros
    E clico no botão Filtrar na tela de Filtros
    Quando excluo a linha com o valor 'CONTEXTO[IDGLOBAL]' no grid do Browser
    Então aguardo o Dialogo de Confirmação de Exclusão
    E clico em 'Sim' no Dialogo de Confirmação de Exclusão
    E aguardo o status 'Registro removido com sucesso'
  



