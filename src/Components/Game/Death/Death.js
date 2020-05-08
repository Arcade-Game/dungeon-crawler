import React, {useState, useEffect} from 'react';
import './Death.scss';

const Death = (props) => {
    return (
        <div className="death-container">
            YOU DEAD :(
            <div className="to-town" onClick={() => props.history.push('/town')}>RETURN TO TOWN --></div>
        </div>
    )
}

export default Death;