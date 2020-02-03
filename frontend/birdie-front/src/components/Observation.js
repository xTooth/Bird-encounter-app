import React from 'react'


const Observation = (props) => {
    
    const observation = props.obs
    if(observation === undefined){
        window.location.href = 'https://damp-hamlet-88516.herokuapp.com/'
    }
    const location = "https://www.google.com/maps/search/?api=1&query=" + observation.long + "," + observation.lat
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{observation.species}</h5>
                <p> Seen by user: {observation.user}</p>
                <p>Rarity: {observation.rarity}</p>
                <p>Description: <br /> {observation.description}</p>
                <p>Spotted at: {observation.dtime}</p>

                <a href={location} target='_blank' rel='noopener noreferrer'> Location: Latitude: {observation.lat} Longitude: {observation.long}</a>
            </div>
        </div>
    )

}

export default Observation