import React, {useState, useEffect} from 'react';

import './LavaBridge.scss';

const LavaBridge = (props) => {
    const {charX, charY} = props
    const [lavaCounter, setLavaCounter] = useState(0)

    useEffect(() => {
        let newLava = lavaCounter+1
        setLavaCounter(newLava)
    }, [charX, charY])

    console.log("lavaCounter", lavaCounter, charX, charY)
    return (
        <div className="lava-bridge-container">
            LAVA BRIDGE
            {lavaCounter}
        </div>
    )
}

// export default LavaBridge;