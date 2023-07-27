import chalk from 'chalk';
import select from '@inquirer/select';
import index from './index.js';


async function menu() {
  const perg = await select({message: `Selecione uma Opção: `, choices: [{value: '* - iniciar Atendimento'}, {value: '* - Sair'}]})
    if(perg == '* - iniciar Atendimento') {
    await index()
  }
}

menu();
export default menu
