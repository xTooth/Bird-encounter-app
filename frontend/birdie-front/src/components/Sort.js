import React from 'react'



const Sort = (props) => {

    const handleChange = async (event) => {
        event.preventDefault()
        await new Promise(resolve =>
            props.store.dispatch({
                type: 'SWAP',
                data: event.target.value
            }, () => resolve()))
    }
    return (
        <div className='container'>
            <form>
                <div className='form-group row text-center'>
                    <div className='col text-center'>
                        <button
                            id='time'
                            type='button'
                            value='time'
                            onClick={handleChange}
                            className='btn btn-secondary btn-block'
                        >
                            Sort by time
                    </button>
                    </div>
                    <div className='col text-center'>
                        <button
                            id='name'
                            type='button'
                            value='name'
                            onClick={handleChange}
                            className='btn btn-secondary btn-block'
                        >
                            Sort by species
                    </button>
                    </div>
                </div >
            </form >
        </div>
    )
}

export default Sort