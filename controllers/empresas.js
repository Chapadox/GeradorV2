import input from '@inquirer/input';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import geradorDeDescrição from './problema.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para adicionar ao relato
function addAoRelato (mensagem) {fs.appendFileSync(path.join(__dirname, '../relatos/relatoLentidao.txt'), mensagem)};
//

async function lig10() {
console.log('LIG10')
addAoRelato('*LIG10*\n');
const lig10 = [
  {message: 'QUEM LIGOU: '},
  {message: 'CLIENTE: '},
  {message: 'CPF: '},
]

    for (let i = 0; i < lig10.length; i++) {
      const res = await input(lig10[i]);
      const armazenarPergs = lig10[i].message
   addAoRelato(armazenarPergs + res + '\n');
  }
  
  addAoRelato('DESCRIÇÃO:');
  console.log('Descrição: ')
  const perg = await input({message: 'Deseja usar o criador de relatos ?'});
  if(perg == 'sim') {
    const desc = await geradorDeDescrição();
    console.log('salve')
  } else {
    
  }
}

export default {
    lig10: lig10
} 


