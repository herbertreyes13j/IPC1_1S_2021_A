//Importamos express
const express = require('express')

//Realizamos la instancia de express
const app = express()

app.use(express.static(__dirname+'/public'));

const server = app.listen(8888,()=>{
    console.log('Servidor funcionando!!!')
});






