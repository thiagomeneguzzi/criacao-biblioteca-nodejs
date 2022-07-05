const chalk = require('chalk')
const fs = require('fs')

function treatError(error) {
  throw new Error(chalk.red(error.code, 'não há arquivo no caminho'));
}

async function getFile(path) {
  const encoding = 'utf-8'
  try {
    const text = await fs.promises.readFile(path, encoding)
    return extractLinks(text)
  } catch (error) {
    treatError(error)
  }
}

function extractLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const resultsArray = [];
  let temp;

  while((temp = regex.exec(text)) !== null) {
    resultsArray.push({[temp[1]]: temp[2]})
  }

  return resultsArray.length === 0 ? 'Não há links' : resultsArray;
}

// getFile('./arquivos/texto1.md')

module.exports = getFile