import input from '@inquirer/input';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function perguntas() {
    fs.appendFileSync(path.join(__dirname, '../relatos/relato.txt'), 'CLIENTE INFORMA ESTAR SEM CONEXÃO \n');
    const perguntas = [
        {message: 'PROBLEMA TEVE INICIO: ' },
        {message: 'OS EQUIPAMENTOS FORAM REINICIADOS: ' },
        {message: 'APRESENTA LED LOS: '},
        {message: 'POSSUI CONEXÃO CABEADA: '},
        {message: 'TODOS OS CABOS FORAM VERIFICADOS: '},
        {message: 'QUAL MENSAGEM APARECE AO SE CONECTAR NA REDE WI-FI: '},
        {message: 'QUAL STATUS ATUAL DA REDE: '},
        {message: 'DIGITE O COMPLEMENTO DO SEU RELATO: '},
        {message: 'QUAL MELHOR DIA/HORARIO PARA VISITA TECNICA: '},
    ]

    for(let i = 0; i < perguntas.length; i++) {      
        const res = await input(perguntas[i]);
        const replicaArr = perguntas[i].message
        fs.appendFileSync(path.join(__dirname, '../relatos/relato.txt'), replicaArr);
        criarRelato(res)
    }
    fs.appendFileSync(path.join(__dirname, '../relatos/relato.txt'), 'CIENTE DO PRAZO. \n');
};

function criarRelato (respostas) {
    fs.appendFileSync(path.join(__dirname, '../relatos/relato.txt'), respostas.toUpperCase() + '\n')
}
 

export default perguntas;

// DESTR00