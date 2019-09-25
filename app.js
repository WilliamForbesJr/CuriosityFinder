const request = require('request');
const express = require('express');

const d = new Date()
const yesterday = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()-1}`;

const key = '&api_key=PWpg8az80VaMoqfYAtuIKrlAJv4YhHsBuVodHQFl';
const frontHazQuery = `?earth_date=${yesterday}&camera=fhaz`;
const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos' + frontHazQuery + key



request ({url, json: true}, (error, response, body) => {
    if (error) {
        console.log('error');
    } else {
        console.log(body)
    }
})

const parseData = (response) => {
    JSON.parse(response)
}