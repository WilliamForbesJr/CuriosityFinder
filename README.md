# Curiosity Finder
See the most recent Curiosity rover photo. This makes for a fun homepage for space nerds.

## Motivation
I originally began this project to practice working with RESTful APIs. However NASA is incredibly generous with their APIs and they provide some truly captivating data and images. I plan to continue building on this project to generate even more beautiful imagery and data and give the options on what category of images to pull from.

## Features
- This app uses NASA's API to pull the latest images from the Curiosity Rover. 
- To view the live app follow this link: https://curiosity-finder.herokuapp.com/
- On each page load, it will randomly load one of the 3 most recent images from Curiosity's Hazard Cameras or Chemical Camera.

## Screenshots
Include logo/demo screenshot etc.

## Tech used
- Backend: 
 - NodeJS, Express
- Frontend:
 -hbs for templating. Styled with plain CSS

## Installation
- Local installation not necessary. However, if you would like to run locally, you will need your own API key stored as an environment variable.

## API Reference
- This app stores the API key as a local environment variable. So if you are cloning this app on a new server or use locally, you will need to get an API key.
  - API key can be found here: https://api.nasa.gov/
  - This app makes all requests to **Mars Rover Photos**
  - *It is important to note that Curiousity's most recent update is 24 hours behind. I have set a buffer of 48 hours in the date to account for any edge cases in which there is a longer delay.*

## Tests
- Basic unit tests included. These will require Mocha and Chai
