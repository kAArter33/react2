import React from 'react'
import './Step.css';

const Step = (props) => {
    return (
        <div>
            <span>Krok</span>
            <input 
            type='number' 
            name='quanity'
            onChange={(e) => {
                let currentStepValue = e.currentTarget.value
                // console.log(e)
                props.stepMethod(currentStepValue)
            }} />
        </div>

    )
}

export default Step;