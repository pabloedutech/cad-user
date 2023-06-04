// programa lê todas as planilhas da pasta e ignora células vazias
const xlsx = require('xlsx');  // importa a biblioteca xlsx para manipulação de arquivos Excel
const fs = require('fs');  // importa a biblioteca fs para manipulação de arquivos
const path = require('path');  // importa a biblioteca path para manipulação de caminhos de arquivo

const dirPath = './planilhas/';  // define o diretório onde serão lidos os arquivos
const files = fs.readdirSync(dirPath).filter(file => path.extname(file) === '.xlsx');  // buscar arquivos.xlsx e adiciona na variável

const sheetsData = {};  // inicia objeto onde serão armazenados os conteúdos
for (const file of files) {  // percorre cada arquivo encontrado
  const workbook = xlsx.readFile(path.join(dirPath, file));  // lê o arquivo Excel com o caminho completo do arquivo
  const sheetNames = workbook.SheetNames;  // obtém os nomes das planilhas
  for (const sheetName of sheetNames) {  // percorre cada planilha do arquivo
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });  // converte a planilha em um array de arrays de dados
    const filteredData = sheetData.filter(row => row.some(cell => !!cell));  // filtra as linhas da planilha que contêm pelo menos um valor
    filteredData.shift();  // remove a primeira linha (que contém os cabeçalhos)
    
    if (sheetName !== 'Sheet1' && filteredData.length > 0) { // adiciona apenas se não for a planilha "Sheet1" e se houver conteúdo
      if (!sheetsData[sheetName]) {  // se não existe o nome da planilha no objeto sheetsData
        sheetsData[sheetName] = [];  // cria o array para o nome da planilha
      }
      sheetsData[sheetName].push(...filteredData);  // adiciona os dados da planilha ao array correspondente no objeto sheetsData
    }
  }
}

console.log(sheetsData);





// *************************************************************************





// programa lê todas as planilhas da pasta, mas não ignora células vazias
// const XLSX = require('xlsx');
// const fs = require('fs');
// const path = require('path');

// const dirPath = './planilhas/';
// const files = fs.readdirSync(dirPath).filter(file => path.extname(file) === '.xlsx');

// const sheetsData = {};
// for (const file of files) {
//   const workbook = XLSX.readFile(path.join(dirPath, file));
//   const sheetNames = workbook.SheetNames;
//   for (const sheetName of sheetNames) {
//     const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
//     const filteredData = sheetData.filter(row => row.some(cell => !!cell));
//     filteredData.shift();
//     if (!sheetsData[sheetName]) {
//       sheetsData[sheetName] = [];
//     }
//     sheetsData[sheetName].push(...filteredData);
//   }
// }

// console.log(sheetsData);





// *************************************************************************





// programa lê todas as planilhas da pasta, mas deixa tudo em um único array
// const XLSX = require('xlsx');
// const fs = require('fs');
// const path = require('path');

// const dirPath = './planilhas/';
// const files = fs.readdirSync(dirPath).filter(file => path.extname(file) === '.xlsx');

// const data = [];
// for (const file of files) {
//   const workbook = XLSX.readFile(path.join(dirPath, file));
//   const sheet_name_list = workbook.SheetNames;
//   const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], { header: 1 });
//   const filteredData = sheetData.filter(row => row.some(cell => !!cell));
//   filteredData.shift();
//   data.push(...filteredData);
// }

// console.log(data);





// *************************************************************************





// programa lê apenas 1 planilha na pasta
// const XLSX = require('xlsx');
// const conteudoPlanilha = XLSX.readFile('./planilhas/TemplateIC_PA_Digital_Fibra.xlsx');  // cria objeto/Json com conteúdo da planilha
// const listaDeUsuarios = conteudoPlanilha.SheetNames;  // cria variável com nome das planilhas
// const data = XLSX.utils.sheet_to_json(conteudoPlanilha.Sheets[listaDeUsuarios[0]], { header: 1 });

// const result = data.filter(row => row.some(cell => !!cell)); // adiciona um array na variável e remove linhas com células vazias
// result.shift(); // remove a primeira linha de títulos das colunas

// console.log(result);





// *************************************************************************





// programa lê o conteúdo da planilha incluindo os títulos 
// const XLSX = require('xlsx');
// const workbook = XLSX.readFile('./planilhas/cadastro-teste.xlsx');
// const sheetName = workbook.SheetNames[0];
// const sheet = workbook.Sheets[sheetName];

// const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

// const data = rows.filter(row => {
//   return row.some(cell => cell !== '');
// });

// console.log(data);





// *************************************************************************





// programa lê o conteúdo da planilha incluindo os títulose e células em branco
// const XLSX = require("xlsx");
// const workbook = XLSX.readFile("./planilhas/cadastro-teste.xlsx");
// const sheetName = workbook.SheetNames[0];
// const sheet = workbook.Sheets[sheetName];
// const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
// console.log(data);
















