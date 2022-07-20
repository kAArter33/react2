import React, { Component } from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
// import Clock from './Clock';
import ClockFunctional from './ClockFunctional';
import Step from './Step';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 1
        };

    }


    stepChangeValue = (currentStepValue) => {

        console.log(currentStepValue)

        this.setState({
            stepValue: currentStepValue
        })

    }

    changeValue = (action) => {

        this.setState((prevState, prevProps) => {
            console.log(prevState);
            // console.log(action);

            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += Number(this.state.stepValue);
            }

            else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            }

            else {
                currentCounterValue = 0;
            }

            return ({
                counterValue: currentCounterValue
            })
        });
    }

    toggleClock = () => {
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            })
        })
    }

    render() {

        let clockElement = " ";
        if (this.state.showClock) {
            clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />;
        }
        else {
            clockElement = <span onClick={this.toggleClock}
                className="show-clock"> show clock</span>
        }

        return (<div className="counter">
            Licznik: 
            <Display displayValue={this.state.counterValue} />
            <ButtonsPanel buttonMethod={this.changeValue} />
            {clockElement}
            <Step stepMethod={this.stepChangeValue} />

        </div>)
    }
}

export default Counter;