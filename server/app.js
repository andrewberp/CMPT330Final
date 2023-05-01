const express = require('express'); 
const app = express(); 
console.log("Fun")
app.use(express.static('client/public'));

app.get('/', function (req, res) { 
    res.sendFile('index.html', {root: './' }) 
}) 

app.get('/home', function (req, res) { 
    res.sendFile('home.html', {root: './' })   

    
})

app.listen(1337, () => console.log('Welcome Aboard!'));

/* app.get('/home', function (req, res) { 
    res.sendFile('home.html', {root: __dirname}) */
