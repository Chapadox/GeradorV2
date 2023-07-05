import select from '@inquirer/select';
import semConexao from './controllers/semConexão.js'
import lentidao from './controllers/lentidaoController.js'

const perguntas =  await select({
    message: 'Selecine uma opção',
    choices: [
      {
        name: 'Sem conexão',
        value: '1',
      },
      {
        name: 'Lentidão',
        value: '2',
      },
      {
        name: 'Oscilação',
        value: '3',
      },
    ],
  });

function question(resposta) {
    switch (resposta) {
        case '1':
            semConexao()
            break;
        case '2':
          lentidao()
            break;
        case '3':
            break;
    }
};

question(perguntas)

// DESTR00
