const path      = require('path')
const request   = require('request');
const express   = require('express');
const hbs       = require('hbs')
const app       = express();

//path setup
const publicDirectoryPath = path.join(__dirname,)
const viewsPath = path.join(__dirname, './views')
console.log(publicDirectoryPath)

//view engine setup for templating
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicDirectoryPath)) //static dir



const d = new Date()
//Remember: getMonth is 0 index. GetDate-1 returns latest curiosity data
const yesterday = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()-1}`;






app.get('', (req, res) => {

    const key = '&api_key=PWpg8az80VaMoqfYAtuIKrlAJv4YhHsBuVodHQFl'; //need to store key as heroku variable
    const frontHazQuery = `?earth_date=${yesterday}&camera=fhaz`;
    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos' + frontHazQuery + key

    request({ url, json: true }, (error, response, body) => {
        if (error) {
            console.error(error);
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



app.listen(3000, () => {
    console.log('server started!')
})