import React, { Component } from 'react'
import { geolocated } from 'react-geolocated'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

class NewInstance extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedRarity: 'Common',
            name: '',
            desc: '',
            user: '',
            lat: '',
            long: '',


        }
    }
handleRarityChange = changeEvent => {
    this.setState({
        selectedRarity: changeEvent.target.value
    });
};
handleNameChange = changeEvent => {
    this.setState({
        name: changeEvent.target.value
    });
};
handleDescChange = changeEvent => {
    this.setState({
        desc: changeEvent.target.value
    });
};
handleUserChange = changeEvent => {
    this.setState({
        user: changeEvent.target.value
    });
};
handleLatChange = changeEvent => {
    this.setState({
        lat: changeEvent.target.value
    });
};
handleLongChange = changeEvent => {
    this.setState({
        long: changeEvent.target.value
    });
};

handleFormSubmit = async(formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    // send intel to backend.
    if (this.state.lat === '') {
        await new Promise(resolve => this.setState({ lat: this.props.coords.longitude }, () => resolve()))
    }
    if (this.state.long === '') {
        await new Promise(resolve => this.setState({ long: this.props.coords.latitude }, () => resolve()))
    }

    let observationObject = {
        user: this.state.user,
        species: this.state.name,
        description: this.state.desc,
        rarity: this.state.selectedRarity,
        time: new Date().toISOString(),
        lat: this.state.lat,
        long: this.state.long
    }
    axios
    .post('https://damp-hamlet-88516.herokuapp.com/api/observations', observationObject)
    .then(response => {
      console.log(response)
    })
    this.props.history.push('/')
}

render() {
    return (
        !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (           
            <div className='container'>
            <p>GeoLocation is either having a slow day or is disabled.</p>
            <div className='card'>
                <div className='card-body'>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className='from-goup'>
                            <label htmlFor='user'>Username: </label>
                            <input id='user' type='text' className='form-control' placeholder='Username' onChange={this.handleUserChange} required></input>
                            <small id='userHelp' className='form-text text-muted'>Just a nametag to separate users</small>
                        </div>
                        <div className='from-goup'>
                            <label htmlFor='spc'>Species: </label>
                            <input id='spc' type='text' className='form-control' placeholder='Name of Species' onChange={this.handleNameChange} required></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='desc'>Description:</label>
                            <textarea className='form-control' id='desc' rows='3' onChange={this.handleDescChange} required></textarea>
                        </div>
                        <div className='form-group'>
                            <h6><b>Position</b></h6>
                            <div className='form-group'>
                                <label htmlFor='lat'> Latitude: </label>
                                <input id='lat' className='form-control' placeholder='Latitude format = 00.0000' onChange={this.handleLatChange} required></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='long'>Longitude:</label>
                                <input id='long' className='form-control' placeholder='Longitude format = 00.0000' onChange={this.handleLongChange} required></input>
                            </div>
                        </div>
                        <div className='form-check'>
                            <h6><b>Rarity</b></h6>
                            <input
                                id='common'
                                type='radio'
                                name='react-tips'
                                value='Common'
                                checked={this.state.selectedRarity === 'Common'}
                                onChange={this.handleRarityChange}
                                className='form-check-input'
                            />
                            <label htmlFor='common'>Common</label>

                        </div>
                        <div className='form-check'>

                            <input
                                id='rare'
                                type='radio'
                                name='react-tips'
                                value='Rare'
                                checked={this.state.selectedRarity === 'Rare'}
                                onChange={this.handleRarityChange}
                                className='form-check-input'
                            />
                            <label htmlFor='rare'>Rare</label>
                        </div>
                        <div className='form-check'>

                            <input
                                id='erare'
                                type='radio'
                                name='react-tips'
                                value='Extremely Rare'
                                checked={this.state.selectedRarity === 'Extremely Rare'}
                                onChange={this.handleRarityChange}
                                className='form-check-input'
                            />
                            <label htmlFor='erare'>Extremely rare</label>
                        </div>
                        <br />
                        <div className='form-group text-center row'>
                            <div className='col'>
                                <button className='btn btn-primary btn-block' type='submit'>Save</button>
                            </div>
                            <div className='col'>
                                <Link className='btn btn-danger btn-block' to="/">Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        ) : this.props.coords ? (
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={this.handleFormSubmit}>
                            <div className='from-goup'>
                                <label htmlFor='user'>Username: </label>
                                <input id='user' type='text' className='form-control' placeholder='Username' onChange={this.handleUserChange} required></input>
                                <small id='userHelp' className='form-text text-muted'>Just a nametag to separate users</small>
                            </div>
                            <div className='from-goup'>
                                <label htmlFor='spc'>Species: </label>
                                <input id='spc' type='text' className='form-control' placeholder='Name of Species' onChange={this.handleNameChange} required></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='desc'>Description:</label>
                                <textarea className='form-control' id='desc' rows='3' onChange={this.handleDescChange} required></textarea>
                            </div>
                            <div className='form-group'>
                                <h6><b>Position</b></h6>
                                <div className='form-group'>
                                    <label htmlFor='lat'> Latitude: </label>
                                    <input id='lat' className='form-control' placeholder='Latitude' defaultValue={this.props.coords.latitude} onChange={this.handleLatChange} required></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='long'>Longitude:</label>
                                    <input id='long' className='form-control' placeholder='Longitude' defaultValue={this.props.coords.longitude} onChange={this.handleLongChange} required></input>
                                </div>
                            </div>
                            <div className='form-check'>
                                <h6><b>Rarity</b></h6>
                                <input
                                    id='common'
                                    type='radio'
                                    name='react-tips'
                                    value='Common'
                                    checked={this.state.selectedRarity === 'Common'}
                                    onChange={this.handleRarityChange}
                                    className='form-check-input'
                                />
                                <label htmlFor='common'>Common</label>

                            </div>
                            <div className='form-check'>

                                <input
                                    id='rare'
                                    type='radio'
                                    name='react-tips'
                                    value='Rare'
                                    checked={this.state.selectedRarity === 'Rare'}
                                    onChange={this.handleRarityChange}
                                    className='form-check-input'
                                />
                                <label htmlFor='rare'>Rare</label>
                            </div>
                            <div className='form-check'>

                                <input
                                    id='erare'
                                    type='radio'
                                    name='react-tips'
                                    value='Extremely Rare'
                                    checked={this.state.selectedRarity === 'Extremely Rare'}
                                    onChange={this.handleRarityChange}
                                    className='form-check-input'
                                />
                                <label htmlFor='erare'>Extremely rare</label>
                            </div>
                            <br />
                            <div className='form-group text-center row'>
                                <div className='col'>
                                    <button className='btn btn-primary btn-block' type='submit'>Save</button>
                                </div>
                                <div className='col'>
                                    <Link className='btn btn-danger btn-block' to="/">Cancel</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        ) : (
                        <div>Getting the location data&hellip; </div>
                    )
    )
}
}

export default withRouter(geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(NewInstance))