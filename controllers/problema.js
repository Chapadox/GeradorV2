import select from '@inquirer/select';
import semConexao from './semConexão.js'
import lentidao from './lentidaoController.js'
import oscilacao from './oscilacao.js'

async function selecioneProblema(){
const perguntas = await select({
  message: 'Selecine o tipo de problema',
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

switch (perguntas) {
        case '1':
          await  semConexao()
            break;
        case '2':
          await lentidao()
            break;
        case '3':
          await oscilacao()
            break;
    }
}
export default selecioneProblema
