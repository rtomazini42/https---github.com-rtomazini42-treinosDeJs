//promessas e asincronias
//estrutura parecida com try, catch e finally

new Promise((resolve,reject) => {

    resolve()

    reject
})


const promessaNumeroQualquer = new Promise((resolve,reject) =>{
    const numero = parseInt(Math.random()*100);
    resolve(numero)
})

promessaNumeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((error)=> {
        console.error(error)
    })
    .finally((error)=> {
        console.log('finalizou')
    })

    /pode-se colocar vários then
    