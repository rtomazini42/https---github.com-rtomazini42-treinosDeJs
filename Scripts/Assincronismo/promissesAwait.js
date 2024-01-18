const fs = require('fs'); //para leitura de arquivos
const path = require('path');
const FliePath = path.resolve(__dirname,'tarefas.csv');


async function buscarArquivo() {
    const arquivo = await fs.promises.readFile(FliePath)
    let textoArquivo = arquivo.toString('utf8')
    console.log(textoArquivo)
}

buscarArquivo()