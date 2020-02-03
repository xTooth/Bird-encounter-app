# Birdies
A web-application for birdwatching observations

[The App on Heroku](https://damp-hamlet-88516.herokuapp.com/)
## The Stack:

Frontend:

Built with React and  Redux with some help of
Axios and styling with react-Bootstrap.

Backend:

Node.js with the helping hand of Express, Dotenv and cors.


DB:

Im using a MongoDB on [MongoDB Atlas](https://cloud.mongodb.com). running a free tier AWS Cluster.(some limitations apply.)

### To run the project locally:

Download the repository, and make the following changes:

####  Frontend:
Change all URL:s in the front end (exept for the goolgle maps one) to <code>http://localhost:3001/<...whatever follows the original slash></code>

#### Backend:
Remove the following from the index.js in the root of the repository ``` app.use(express.static('build'))```

And then for the tricky part. create a local file called .env in which you need to define 2 things:

```
MONGODB_URI= <here goes YOUR very own MongoDB URI behind which there should be an empty or a compatible dataset>
PORT=3001
```
after this both the front end and the back end should build after runnoing the command: ```npn install``` in the root of their respective directories.
Running the application is done by:

backend:

``` .../ $ npm start ```

in the case of the front end this is: 

```.../frontend/birdie-front/ $ npm start```

when ".../" is considered the root of the repository.

## Some General Notes

### Features

Main Menu:
- allows for navigation between the list of created sightings and the form to add a new sighting.

Main page List:
- shows sightings of birds in either cronological (default) or alphabetic order (based on species name).
- each enry in the list shows when it was made, what species was spotted, rarity of the species and an excerpt of the description of the event. 

- each entry in the list can be opened to show the full details and to access the link to Google maps for its location.

Form:
- a form to add a new sighting. 
- Can be used with or without geolocation, but does require each field to be filled.
- timestamp is inserted automatically behind the scenes.

### Known bugs

- The app crashes if one tries to reload a single item view. This is due to the way the data for the view is collected trough the index of the site. I put a workaround in place but Heroku ignores it, however it does catch any errors locally.


### Personal notes:

First of all this was a fun exercise that I ended up doing in a crazy hurry. I wanted to add automated tests and the ability to add images but I simply ran out of time. As for the structure of the project I'm not entirely happy with how the Front end ended up. It's a bit messy and I dont think it displays my best work.

```
This project will probably not get updated from it's current state.
```
