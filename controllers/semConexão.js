import input from '@inquirer/input';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function addAoRelato(mensagem){fs.appendFileSync(path.join(__dirname, '../relatos/relato.txt'), mensagem)}

async function perguntas() {
    addAoRelato('CLIENTE INFORMA ESTAR SEM CONEXÃO \n');
    const perguntas = [
        {message: 'PROBLEMA TEVE INICIO: ', default: 'SIM' },
        {message: 'OS EQUIPAMENTOS FORAM REINICIADOS: ', default: 'SIM' },
        {message: 'APRESENTA LED LOS: ', default: 'SIM' },
        {message: 'POSSUI CONEXÃO CABEADA: ', default: 'SIM'},
        {message: 'TODOS OS CABOS FORAM VERIFICADOS: ', default: 'SIM'},
        {message: 'QUAL MENSAGEM APARECE AO SE CONECTAR NA REDE WI-FI: ', default: 'CONECTADO, SEM INTERNET'},
        {message: 'QUAL STATUS ATUAL DA REDE: '},
        {message: 'DIGITE O COMPLEMENTO DO SEU RELATO: ', },
        {message: 'QUAL MELHOR DIA/HORARIO PARA VISITA TECNICA: '},
    ]

   for(let i = 0; i < perguntas.length; i++) {      
        const res = await input(perguntas[i]);
        const replicaArr = perguntas[i].message 
        addAoRelato(replicaArr + `${res.toUpperCase()}\n`);
    }
    addAoRelato('CIENTE DO PRAZO. \n');
};

export default perguntas;

// DESTR00
