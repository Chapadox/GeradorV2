import input from '@inquirer/input';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import geradorDeDescrição from './problema.js';
import select from '@inquirer/select';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para adicionar ao relato
function addAoRelato (mensagem) {fs.appendFileSync(path.join(__dirname, '../relatos/relatoLentidao.txt'), mensagem)};
//

async function percorrerPergs(pergs) {
    for (let i = 0; i < pergs.length; i++) {
      const res = await input(pergs[i]);
      const armazenarPergs = pergs[i].message
   addAoRelato(armazenarPergs + res + '\n');
  }
}


async function lig10() {
console.log('LIG10');
const lig10 = [
  {message: 'QUEM LIGOU: '},
  {message: 'CLIENTE: '},
  {message: 'CPF: '},
]

const lig10RelatoFinal = [{message: '\nATT: '}, {message: 'TELEFONE: '}, {message: 'CONTRATO BLOQUEADO: ', default: 'SIM/NÃO'}, {message: 'MELHOR HORARIO PARA CONTATO: '}, {message: 'ENDEREÇO: '}]
  const protocol = await input({message: 'Digite O Protocolo da Ligação: '})
  
  addAoRelato(`*LIG10*${protocol}\n`)
  await percorrerPergs(lig10);
  addAoRelato('DESCRIÇÃO: ');
  console.log('Descrição: ')

  const perg = await select({message: 'Deseja usar o criador de relatos ?', choices: [{value: 'Sim'}, {value: 'Não'}]})
  if(perg == 'Sim') {
   await geradorDeDescrição();
   await percorrerPergs(lig10RelatoFinal);
  } else {
    await percorrerPergs(lig10RelatoFinal);
    addAoRelato('CIENTE DO PRAZO\n');
  }
}

export default {
    lig10: lig10
} 


