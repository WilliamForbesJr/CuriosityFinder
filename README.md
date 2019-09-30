# Curiosity Finder
See the most recent Curiosity rover photo!

## Features
- This app uses NASA's API to pull the latest images from the Curiosity Rover. 
- To view the live app follow this link: https://curiosity-finder.herokuapp.com/
- On each page load, it will randomly load one of the 3 most recent images from Curiosity's Hazard Cameras or Chemical Camera.



## Developer Notes:
- This app stores the API key as a local environment variable. So if you are cloning this app, or trying to work locally, you will need to get an API key.
  - API key can be found here: https://api.nasa.gov/
  - This app makes all requests to **Mars Rover Photos**
  - When uploading server file to host, you will need to store key as local environment variable. This will also apply to when working in a local environment
- It is important to note that Curiousity's most recent update is 24 hours behind. I have set a buffer of 48 hours in the date to account for any edge cases in which there is a longer delay.
- I have included a few basic unit tests to test basic API Manager functions. This will require Mocha and Chai
