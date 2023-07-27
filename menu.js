import chalk from 'chalk';
import select from '@inquirer/select';
import index from './index.js';

console.clear()
const log = chalk.bold(chalk.blueBright(`
          |---------------| 
            CORE RELATOS ©
          |---------------|

1 - Crie Relatos Com ${chalk.red('Apenas Alguns clicks')}
2 - Interface de ${chalk.red('Facil Utilização.')}
3 - Sistema ${chalk.red('exclusivo')}

`))

async function menu() {
  console.clear();
  console.log(log)
  const perg = await select({message: `Selecione uma Opção: `, choices: [{value: '* - iniciar Atendimento'}, {value: '* - Sair'}]})
    if(perg == '* - iniciar Atendimento') {
    await index()
  }
}

menu();
export default menu
