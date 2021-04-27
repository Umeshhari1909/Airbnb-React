import React from 'react';
import './SearchPage.css';
import {Button} from '@material-ui/core'

function Searchpage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_info'>
                <p>62 stays , 26 August to 30 auguts ,2 Guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More Variants</Button>
            </div>
        </div>
    )
}

export default Searchpage 
