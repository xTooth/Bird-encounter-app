import React from 'react'
import { Link } from 'react-router-dom'

const List = (props) => {
    return (
        <div className='container'>
            <ul className='list-unstyled'>
                {props.observations.map(observation =>
                    <li key={observation.id}>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className="card-title"><Link to={`observation/${observation.id}`}>{observation.species}</Link></h5>
                                <p>time: {observation.dtime}</p>
                                <p> Rarity: {observation.rarity} <br/>
                                    Description: <br />    {observation.description.substring(0, 30)}...</p>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default List