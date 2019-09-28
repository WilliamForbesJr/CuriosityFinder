// Modules
const path          = require('path')
const request       = require('request');
const express       = require('express');
const hbs           = require('hbs')
const APIManager    = require('./utils/APIManager.js')
const app           = express();

//view engine setup for templating
app.set('view engine', 'hbs')
app.use(express.static('public')) //static dir

app.get('/', (req, res) => {

    const url = APIManager.buildURL(1)

    request({url, json: true}, (error, response, body) => {
        if (error) {
        } else {
            res.render('index', {
                date: body.photos[0].earth_date,
                img: body.photos[0].img_src,
                sol: body.photos[0].sol,
                status: body.photos[0].rover.status
            })
        }
    })
})


let port = process.env.PORT;

app.listen(port || 3000, () => {
    console.log('server started!')
})