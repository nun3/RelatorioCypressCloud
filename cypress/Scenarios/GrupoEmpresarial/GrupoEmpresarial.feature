# language: pt

Funcionalidade: Grupo Empresarial

Contexto:
    Dado que cliquei no menu principal 'Cadastros'
    E que cliquei no menu 'Empresas'
    E que cliquei no sub-menu 'Grupo Empresarial'

@BomCaminho @CRUD
Cenário: Cadastrando um novo Grupo Empresarial
    Dado que clico no botão Novo no cabeçalho de filtro
    Quando preencho o campo 'Razão Social' com o valor 'Grupo de Teste' na tela de Grupo Empresarial
    E preencho o campo 'Fantasia' com o valor 'Fantasia de Teste' na tela de Grupo Empresarial
    E preencho o campo 'Raiz CNPJ' com o valor 'GERAR[CNPJ]' na tela de Grupo Empresarial
    E que clico no botão Salvar no cabeçalho do formulário
    Então armazeno o valor do ID na tela de Grupo Empresarial

@BomCaminho @CRUD
Cenário: Editando um Grupo Empresarial
    Dado que clico no botão Filtrar no cabeçalho de filtro
    E preencho o campo 'Código' com valor 'CONTEXTO[IDGLOBAL]' na tela de Filtros
    E clico no botão Filtrar na tela de Filtros
    E clico na linha com o valor 'CONTEXTO[IDGLOBAL]' no grid do Browser
    Quando preencho o campo 'Razão Social' com o valor 'Grupo de Teste Editado' na tela de Grupo Empresarial
    E preencho o campo 'Fantasia' com o valor 'Fantasia de Teste Editado' na tela de Grupo Empresarial
    E preencho o campo 'Raiz CNPJ' com o valor 'GERAR[CNPJ]' na tela de Grupo Empresarial
    E que clico no botão Salvar no cabeçalho do formulário

@BomCaminho @CRUD
Cenário: Excluindo um Grupo Empresarial
    Dado que clico no botão Filtrar no cabeçalho de filtro
    E preencho o campo 'Código' com valor 'CONTEXTO[IDGLOBAL]' na tela de Filtros
    E clico no botão Filtrar na tela de Filtros
    Quando excluo a linha com o valor 'CONTEXTO[IDGLOBAL]' no grid do Browser
    Então aguardo o Dialogo de Confirmação de Exclusão
    E clico em 'Sim' no Dialogo de Confirmação de Exclusão
    E clico em 'Sim' no Dialogo de Confirmação de Exclusão