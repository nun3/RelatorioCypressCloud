const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Verificar se houve falhas em alguma tentativa de reexecução
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed')
          );
          if (!failures) {
            // Excluir o vídeo se o teste passou e não houve tentativas de reexecução com falha
            fs.unlinkSync(results.video);
          }
        }
      });
    },
    defaultCommandTimeout: 40000,
    screenshotOnRunFailure: true,
    video: true,
    retries: {
      runMode: 2, // Número de tentativas de reexecução
      openMode: 2, // Número de tentativas de reexecução no modo de abertura do Cypress
    },
    cacheAcrossSpecs: true,
    chromeWebSecurity: false,
    baseUrl: "https://erp-homologacao.viasoft.com.br/pt/",
    specPattern: "cypress/Scenarios/**/*.{js,jsx,ts,tsx,feature}"
  },
});



/*
comandos:
rodar feature especifica: npm run cypress:ci --spec "Login.feature"
rodar em browser especifico: npm run cypress:run:edge
abrir interface do cypress: npm run cypress:open
Rodar cenário especifico: npm run cypress:run:chrome @BemSucedido
Rodar feature especifica em um browser especifico:  npm run cypress:run:chrome --spec "Login.feature"
abrir log detalhado: npx cypress run > output.log 2>&1
Atualizar Relatório: node cypress\cucumberReport.js
 */
