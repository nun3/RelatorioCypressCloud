# language: pt
Funcionalidade: Login

  @BomCaminho
  Cenário: Login Bem-Sucedido
    Dado que sai da página de Login
    Quando informo um CPF válido "441.955.950-02"
    E informo uma senha "Camila@1204!M"
    E pressiono o botão de Login
    Então vejo o código da empresa "7000" na página logada

  @BomCaminho
  Cenário: Recuperar Senha
    Dado que sai da página de Login
    E pressiono o botão de Recuperação de Senha
    E informo um CPF válido "441.955.950-02"
    E pressiono o botão para enviar e-mail
    Então vejo o aviso de Recuperação de senha " E-mail enviado! Verifique a caixa de mensagens do seu e-mail e acesse o link para recuperação de senha."

  @MalCaminho
  Cenário: Tentativa de Login com Senha Incorreta
    Dado que sai da página de Login
    Quando informo um CPF válido "441.955.950-02"
    E informo uma senha "SenhaIncorreta123"
    E pressiono o botão de Login
    Então vejo o aviso "Usuário e/ou senha incorretos.×"

  @MalCaminho
  Cenário: Tentativa de Login com Campos Vazios
    Dado que sai da página de Login
    Quando pressiono o botão de Login
    Então vejo o aviso de campo "SenhaObrigatório"