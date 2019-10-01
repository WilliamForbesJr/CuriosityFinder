const APIManager = (function () {
    return {

        key:'&api_key=PWpg8az80VaMoqfYAtuIKrlAJv4YhHsBuVodHQFl', //key stored as local var

        cams: ['fhaz', 'rhaz', 'chemcam', 'mast', 'mahli', 'mardi', 'navcam', 'pancam'],
        //need to check refresh rates for all cams other than fhaz and rhaz as they are not daily use idx 0 and 1 for now

        getDate: function () {
            const d = new Date();
            return `?earth_date=${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() - 3}`;
        },

        loadRandomCam: function () {
            return Math.floor(Math.random() * 4);
        }, //keeping range between 0-2 for now as API calls are still not consistent with all of NASA's cams.

        buildURL: function () {
            return 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos' + this.getDate() + `&camera=${this.cams[this.loadRandomCam()]}` + this.key;
        },

        loadRandomArrayIndex: function(length) {
            return Math.floor(Math.random() * length);
        },
    }
}());

module.exports = APIManager;