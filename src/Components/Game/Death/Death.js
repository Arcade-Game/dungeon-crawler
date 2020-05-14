import React, {useState, useEffect, useRef} from 'react';
import {TweenLite} from 'gsap';
import './Death.scss';

const Death = (props) => {
    let deathScreen = useRef(null)
    let townReturn = useRef(null)
    let youDead = useRef(null)

    useEffect(() => {
        TweenLite.to(
            deathScreen,
            2,
            {
                
            }
        )
        TweenLite.fromTo(
            youDead,
            3,
            {
                immediateRender: false,
                opacity: 0
            },
            {
                opacity: 1
            }
        ).delay(1)
        TweenLite.fromTo(
            townReturn,
            2.3,
            {
                x: 100,
                opacity: 0
            },
            {
                opacity: 1,
                x: 150,
                y: 10
            }
        ).delay(3.5)
    }, [])
    return (
        <div className="death-container" ref={el => {deathScreen = el}}>
            <span className="you-dead" ref={el => {youDead = el}}>YOU DIED.</span>
            <div className="to-town" ref={el => {townReturn = el}} onClick={() => props.history.push('/town')}><span>RETURN TO TOWN</span></div>
        </div>
    )
}

export default Death;