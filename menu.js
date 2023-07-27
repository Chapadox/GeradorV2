import chalk from 'chalk';
import select from '@inquirer/select';

const perg = await select({message: `Selecione uma Opção: `, choices: [{message: '* - iniciar Atendimento'}, {message: '* - Sair'}]})
