const request = require('request');
const express = require('express');
var exphbs = require('express-handlebars'); //handlebars templating

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')

const d = new Date()
const yesterday = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()-1}`;

const key = '&api_key=PWpg8az80VaMoqfYAtuIKrlAJv4YhHsBuVodHQFl';
const frontHazQuery = `?earth_date=${yesterday}&camera=fhaz`;
const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos' + frontHazQuery + key

app.get('/', function (req, res) {
    res.send('Hello World')
})

request ({url, json: true}, (error, response, body) => {
    if (error) {
        console.log('error');
    } else {
        const img = body.photos[0].img_src
        console.log(img)
    }
})

app.listen(3000, () => {
    console.log('server started!')
})