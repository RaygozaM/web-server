const express = require('express');
const app = express(); 
const hbs = require('hbs'); 

const port = process.env.PORT || 3000;
 
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs'); 

app.get('/', (req, resp) => {
  resp.render('home', { 
   nombre: 'Armando'  
  }); 
});

app.get('/about', (req, resp)=>{
  resp.render('about');
})

//app.get('/', function (req, res){
    //res.send('<h1> Hello Cesar </H1>')
  //  let salida = {
    //    nombre: 'Cesar',
        //edad: 19,
      //  url: req.url
    //}; 

    //res.send(salida);  
//})

//app.get('/hola', (req, res) => {
  // res.send('Esatas en /hola'); 
//})
app.listen(port, () => {
   console.log('Escuchando por el puerto ', port)
});