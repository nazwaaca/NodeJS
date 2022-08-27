const path = require('path')
const express = require('express')
const hbs = require('hbs')


const viewsPath = path.join(__dirname, '../templates/views')
const publicDirectoryPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../templates/partials')

const app = express()

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index', {
    title: 'My title',
    name: 'Andrew Mead'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

