import React, {useState, useEffect} from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import './Chest.css';

const Chest = (props) => {
    return(

        <div className="chest-sprite-container">
            <div className="chest-spritesheet" />
        </div>





        // <Spritesheet
        //     image={require('../pictures/glowingChest.png')}
        //     widthFrame={100}
        //     heightFrame={80}

        //     scale={1}
        //     steps={5}
        //     fps={5}
        //     loop={true}
        //     direction={'rewind'}
        //     isResponsive={true}
        //     style={{display: 'flex', justifyContent: 'flex-start', border: '1px solid yellow'}}
        // />
    )
}

export default Chest;