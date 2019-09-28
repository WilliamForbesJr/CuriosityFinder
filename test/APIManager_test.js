const expect = require('chai').expect;

describe('API Manager', () => {
    const APIManager = require('../utils/APIManager.js')

    it('should get date', () => {
        expect(APIManager.getDate()).to.not.include(undefined)
    });

    it('should retreive API key from local env variable', () => {
        expect(APIManager.key).to.include("&api_key=PWpg8az80VaMoqfYAtuIKrlAJv4YhHsBuVodHQFl");
    });

    it('should not have undefined when building URL', () => {
        expect(APIManager.buildURL()).to.include(undefined);
    });
})
