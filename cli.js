#!/usr/bin/env node

const chalk = require('chalk')
const getFile = require('./index')
const validateURLs = require('./http-validation')

const caminho = process.argv;

async function processText(path) {
  const result = await getFile(path[2]);
  if(caminho[3] === 'validar') {
    console.log(chalk.yellow('Links validados'), await validateURLs(result))
  } else {
    console.log(chalk.yellow('Lista de links'), result)
  }
}

processText(caminho)