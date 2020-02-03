require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Observation = require('./models/observation')

app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json())

app.get('/api/observations/sort/name', async(req, res) => {
    let observations = await Observation.find({})
    observations = observations.map(observation => observation.toJSON())
    console.log(observations)
    observations.sort(function(a, b) {
        return (a.species < b.species) ? -1 : ((a.species > b.species) ? 1 : 0);
    })
    res.json(observations)
})

app.get('/api/observations/sort/time', async(req, res) => {
    observations = await Observation.find({})
    observations.map(observation => observation.toJSON())
    observations.sort(function(a, b) {
        return (a.time > b.time) ? -1 : ((a.time < b.time) ? 1 : 0);
    });
    res.json(observations)
})

app.post('/api/observations', (request, response) => {    
    const content = request.body
    if (content.user === undefined) {
        return response.status(400).json({ error: 'content missing' })
      }
    // making a readable version of time
    const date = new Date(content.time)
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    let dt = date.getDate()
    const hours = date.getHours();
    let mins = date.getMinutes();  
    if (dt < 10) {
        dt = '0' + dt
    }
    if (month < 10) {
        month = '0' + month
    }
    if(mins < 10){
        mins = '0' + mins
    }
    const time = dt + '.' + month + '.' + year + ' @ ' + hours + ':' + mins
    // end of time edit stuff

    const observation = new Observation({
        user: content.user,
        species: content.species,
        description: content.description,
        rarity: content.rarity,
        time: content.time,
        dtime: time,
        lat: content.lat,
        long: content.long
    })
    console.log(observation)

    observation.save().then(savedObservation => {
        response.json(savedObservation.toJSON())
      })
    
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
