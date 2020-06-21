import React, {useEffect, useRef} from 'react';
import {TweenMax, Power3} from 'gsap';
import './HealthBar.scss';

const HealthBar = (props) => {
    let logoItem = useRef('poopy');

    useEffect(() => {
        console.log(logoItem)
        TweenMax.to(
            logoItem,
            5,
            {
                opacity: 0,
                y: -20,
                ease: Power3.easeOut
            }
        )
    }, [])

    return (
        <div
            ref={e => {logoItem = e}}
            style={{background: "white", height: "300px", width: "300px"}}
        ></div>
    )
}

export default HealthBar;