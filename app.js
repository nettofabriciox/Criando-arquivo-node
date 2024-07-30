const fs = require('fs');

fs.appendFile('arquivo.txt', 'add conteudo...', (erro)=>{
    if(erro) throw erro;
    console.log('Conteudo foi adcionado')
})