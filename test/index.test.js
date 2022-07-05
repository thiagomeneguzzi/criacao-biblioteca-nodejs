const getFile = require('../index');

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('getFile::', () => {

  it('Deve ser uma função', () => {
    expect(typeof getFile).toBe('function')
  })

  it('Deve retornar array com resultados', async () => {
    const result = await getFile('C:/Users/Thiago/Desktop/Projetos pessoais/NodeJS/2299-lib-nodejs-markdown/test/arquivos/texto1.md')

    expect(result).toEqual(arrayResult)
  })

  it('Deve retornar mensagem "Não há links"', async () => {
    const result = await getFile('C:/Users/Thiago/Desktop/Projetos pessoais/NodeJS/2299-lib-nodejs-markdown/test/arquivos/texto2.md')

    expect(result).toBe("Não há links")
  })

})