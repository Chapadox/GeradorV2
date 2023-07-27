import select from '@inquirer/select';
import controllerEmpresa from './controllers/empresas.js';

const empresa = {
  message: 'Selecione uma empresa',
  choices: [
    {
      name: '2I TELECOM',
      value: '1'
    },
    {
      name: 'CAMBUHY',
      value: '2'
    },
    {
      name: 'DELTA',
      value: '3'
    },
    {
      name: 'EGR NET',
      value: '4'
    },
    {
      name: 'FONETALK',
      value: '5'
    },
    {
      name: 'ID TELECOM',
      value: '6'
    },
    {
      name: 'ITELECOM',
      value: '7'
    },
    {
      name: 'LIG10',
      value: '8'
    },
    {
      name: 'LINK NET',
      value: '9'
    },
    {
      name: 'NETFREE',
      value: '10'
    },
    {
      name: 'NEX TELECOM',
      value: '11'
    },
    {
      name: 'R2 TELECOM',
      value: '12' 
    },
    {
      name: 'SOTHIS',
      value: '13'
    },
    {
      name: 'TELECALL',
      value: '14'
    },
    {
      name: 'WEB LINK',
      value: '15'
    },
    {
      name: 'WI MAX',
      value: '16'
    }
  ]
}

async function empresaSelecione() {
const empresa2 = await select(empresa)
switch(empresa2) {
    case '8':
   await controllerEmpresa.lig10()
  }
}

export default empresaSelecione;

// DESTR00
