const express = require('express'); 
const app = express(); 
console.log("Fun")
app.use(express.static('client/public'));

app.get('/', function (req, res) { 
    res.sendFile('index.html', {root: './' }) 
}) 

app.get('/today', function (req, res) { 
    res.sendFile('today.html', {root: './' })   

    
})

app.listen(1337, () => console.log('Welcome Aboard!'));
