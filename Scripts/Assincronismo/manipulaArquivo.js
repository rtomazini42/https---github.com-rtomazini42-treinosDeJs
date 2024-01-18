const fs = require('fs'); //para leitura de arquivos

//extra, arquivos
const path = require('path');
const FliePath = path.resolve(__dirname,'tarefas.csv');



const promessaLeituraArquivo = fs.promises.readFile(FliePath)

promessaLeituraArquivo
.then((arquivo) => arquivo.toString('utf8'))
.then((textoArq) => textoArq.split('\n').slice(1))
.catch((error) => {console.log('não funcionou', error)})


