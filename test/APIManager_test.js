const expect = require('chai').expect;

describe('API Manager', function () {
    const APIManager = require('../utils/APIManager.js')

    it('should get date', function () {
        expect(APIManager.getDate()).to.not.include(undefined)
    });

    it('should retreive API key from local env variable', function () {
        expect(APIManager.key).to.include("&api_key=PWpg8az80VaMoqfYAtuIKrlAJv4YhHsBuVodHQFl");
    });

    it('should not have undefined when building URL', function () {
        expect(APIManager.buildURL()).to.include(undefined);
    });

    it('should randomly roll a 0-1', function () {
        expect(APIManager.loadRandomCam()).to.be.within(0,1)
    });
})
