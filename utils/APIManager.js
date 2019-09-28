
const APIManager = (function () {
    return {

        getDate: function () {
            const d = new Date()
            return `?earth_date=${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() - 2}`
        },

        key: process.env.APIKEY, //need to store key as heroku variable

        cams: [
            'fhaz',
            'rhaz',
            'mast',
            'chemcam',
            'mahli',
            'mardi',
            'navcam',
            'pancam',
        ], //need to check refresh rates for all cams other than fhaz and rhaz as they are not daily use idx 0 and 1 for now

        buildURL: function (cam) {
            return 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos' + this.getDate() + `&camera=${this.cams[cam]}` + this.key
        },
    }
}());

module.exports = APIManager;