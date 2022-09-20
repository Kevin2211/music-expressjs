const express = require('express')
const albums = require('./db.js')
const app = express()
const port = 3000
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))


app.get('/', (req,res) => {
    res.render('home')
})

app.get('/albums', (req,res) => {
    const data = albums;
    res.render('albums', {data})
})

app.get('/albums/:handle', (req, res) => {
    const {handle} = req.params
    const album = albums[handle]

    if(album){
        res.render('cd', {album})
    }else{
        res.render('error')
    }
})
app.get('*', (req,res) => {

    res.render('error')
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})