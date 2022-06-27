const chalk = require('chalk')
const fs = require('fs')

function trataErro(error) {
  throw new Error(chalk.red(error.code, 'não há arquivo no caminho'));
}

async function pegaArquivo(path) {
  const encoding = 'utf-8'
  try {
    const texto = await fs.promises.readFile(path, encoding)
    console.log(texto)
  } catch (error) {
    trataErro(error)
  }
}

// function pegaArquivo(path) {
//   const encoding = 'utf-8'
//   fs.promises
//     .readFile(path, encoding)
//     .then((texto) => console.log(texto))
//     .catch((error) => trataErro(error))
// }

pegaArquivo('./arquivos/texto1.md')