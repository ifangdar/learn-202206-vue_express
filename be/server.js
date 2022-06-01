const express = require('express')
const bodyParser = require('body-parser')
var multer  = require('multer')
var fs = require('fs')

const app = express()
const port = 1688

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/txt',multer().array(), (req, res) => {
    
    let formData = req.body;
    console.log('form data', formData);

    fs.writeFile(`./${new Date().getTime()}.txt`,  JSON.stringify(formData), err => {
        if (err) {
          console.error(err);
        }
    })

    res.send('user info is ' + JSON.stringify(formData))
    
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})