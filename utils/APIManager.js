const APIManager = (function () {
    return {

        getDate: function () {
            const d = new Date()
            return `?earth_date=${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() - 2}`
        },

        key: process.env.APIKEY, //need to store key as heroku variable

        cams: ['fhaz', 'rhaz', 'chemcam','mast','mahli','mardi','navcam','pancam',], 
        //need to check refresh rates for all cams other than fhaz and rhaz as they are not daily use idx 0 and 1 for now

        loadRandomCam: function () {
            let min = Math.ceil(0);
            let max = Math.floor(2);
            return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
        }, //keeping range between 0-2 for now as API calls are still not consistent with all of NASA's cams. Will refactor to include cams array once I have a better idea.

        buildURL: function () {
            return 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos' + this.getDate() + `&camera=${this.cams[this.loadRandomCam()]}` + this.key
        },
    }
}());

module.exports = APIManager;