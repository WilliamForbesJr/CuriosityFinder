// Modules
const request       = require('request');
const express       = require('express');
const path          = require('path');
const hbs           = require('hbs');
const APIManager    = require('./utils/APIManager.js');
const app           = express();

//view engine setup for templating
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public'))); //static dir

app.get('/', (req, res) => {

    const url = APIManager.buildURL();

    request({url, json: true}, (error, response, body) => {
        if (error) {
            res.send(error);
        } else {

            const index = APIManager.loadRandomArrayIndex(body.photos.length) //creating constant for photos array based on length of array received

            res.render('index', {
                date: body.photos[index].earth_date,
                img: body.photos[index].img_src,
                sol: body.photos[index].sol,
                status: body.photos[index].rover.status,
                cam: body.photos[index].camera.full_name
            });
        }
    });
});


app.listen(process.env.PORT || 3000, () => {
    console.log('server started!');
})

module.exports = app; //to test