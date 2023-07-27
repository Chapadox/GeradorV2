import input from '@inquirer/input';
import select from '@inquirer/select';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// FUNÇÃO PARA ADICIONAR OS DADOS AO RELATO FINAL. 
function addAoRelato (mensagem) {fs.appendFileSync(path.join(__dirname, '../relatos/relato.txt'), mensagem)};

async function percorrerPergs(perguntas) {
    for (let i = 0; i < perguntas.length; i++) {
          const res = await input(perguntas[i]);
          const armazenarPergs = perguntas[i].message;
      addAoRelato(armazenarPergs + `${res.toUpperCase()}\n`);  
    }
}

async function perguntas() {
  const data = new Date();
  const perguntasPadrao = [ 
    {message: 'PROBLEMA TEVE INICIO: ', default: `${data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear()}`},
    {message: 'OS EQUIPAMENTOS FORAM REINICIADOS: ',  default: 'SIM' },
    {message: 'POSSUI CONEXÃO CABEADA: ',  default: 'SIM'},
    {message: 'TODOS OS CABOS FORAM VERIFICADOS: ',  default: 'SIM'},
    {message: 'DURANTE AS QUEDAS A REDE WI-FI SOME: '},
    {message: 'DURANTE AS QUEDAS APRESENTA LED VERMELHO: '},
    {message: 'A OSCILAÇÃO É FREQUENTE: '}]

  await percorrerPergs(perguntasPadrao);
  addAoRelato('CLIENTE INFORMA ESTAR COM OSCILAÇÃO. \n');
    
  await acessoAoEquipaPerg();
}

// mock
const acessoAoequipametoPergs = {message: 'FOI POSSIVEL ACESSO NO EQUIPAMENTO: ', choices: [{value: 'sim'}, {value: 'não'}]};
const arrAcessoAoequipamentoPerg = [{message: 'IP: '}, {message: 'CANAL SETADO: ' }, {message: 'LARGURA DE BANDA CONFIGURADA EM: '}, {message: 'ALTERADO PARA O CANAL: '}, {message: 'LARGURA ALTERADA PARA: '}];
const pergNormalizou = {message: 'FEITO AS ALTERAÇÕES HOUVE NORMALIZAÇÃO ? ', choices:[{value: 'sim'}, {value: 'não'}]};
//

async function acessoAoEquipaPerg() {
  const acessoAoEquipaPergs = await select(acessoAoequipametoPergs);
    if (acessoAoEquipaPergs == 'sim') { 

      console.log('REDE 2.4G: ')
      addAoRelato('FEITO ACESSO NO EQUIPAMENTO\n' + 'REDE 2.4G: \n');

      await percorrerPergs(arrAcessoAoequipamentoPerg);

      console.log('REDE 5G: ');
      addAoRelato('REDE 5G: \n');

      arrAcessoAoequipamentoPerg.shift();
    
      await percorrerPergs(arrAcessoAoequipamentoPerg);

 await normalizouAcesso();
  } else {
      addAoRelato('SEM ACESSO AO EQUIPAMENTO \nIP:');
      const semAcessoAoequi = await input({message: 'IP: '});
      addAoRelato(`${semAcessoAoequi}\n`);
      const semNormalizaPerg = await input({message: 'DISPONIBILIDADE PARA VISITA: '})
      addAoRelato('DISPONIBILIDADE PARA VISITA: ' + `${semNormalizaPerg.toUpperCase()}\n` + 'CIENTE DO PRAZO.'+'\n');
  }
}

async function normalizouAcesso() {
      const normalizou = await select(pergNormalizou);
        if (normalizou == 'sim') {
          addAoRelato('FEITO AS ALTERAÇÕES HOUVE NORMALIZAÇÃO');
        } else {
          const semNormalizaPerg = await input({message: 'DISPONIBILIDADE PARA VISITA: '});
          addAoRelato('FEITO AS ALTERAÇÕES NÃO HOUVE NORMALIZAÇÃO \n' + 'DISPONIBILIDADE PARA VISITA: ' + `${semNormalizaPerg.toUpperCase()}` + '\n' + 'CIENTE DO PRAZO.');
    }
}

export default perguntas
