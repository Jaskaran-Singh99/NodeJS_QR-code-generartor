const express = require('express')
const app = express()
const qr = require('qrcode')
// const bp = require('body-parser')

//Middleware
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));




// Displaying html file  
app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/scan', async (req, res)=>{
    const url = req.body.name  
    qr.toDataURL(url, (err, src)=>{
        if(err){
            res.send(err)
        }
        res.render('scan', {src})
    })
})
const port = 3000
app.listen(port, console.log('this is working....'))