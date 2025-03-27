const express = require('express')
const path = require('path')
const fs = require('fs');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
})

app.post('/response', (req, res) => {
    console.log(req.body);

    fs.appendFile('responses.txt', JSON.stringify(req.body) + '\n', (err) => {
        if (err) {
            console.error('Error writing to file', err);
        }
    });


    res.send('POST request to the homepage')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
