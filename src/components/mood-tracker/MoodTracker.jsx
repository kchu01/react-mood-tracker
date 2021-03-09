import { Component } from 'react'
import MoodPoints from '../mood-points/MoodPoints.jsx'
import MoodNote from '../mood-note/MoodNote.jsx'

export default class MoodTracker extends Component {
    // // create state and set the initial state boomer way
    // constructor(props) {
    //     // invoke super first
    //     // get functionality from Component
    //     super(props)
    //     this.state = {
    //         points: 99     
    //     }
    // }

    // class field declaration
    state = {
        points: 9
    }

    // event handler section
    handleIncreaseMood = () => {
        this.setState((previousState, props) => {
            return {
                points: previousState.points + 1
            }
        })
    }

    handleDecreaseMood = () => {
        this.setState((previousState, props) => {
            return {
                points: previousState.points - 1
            }
        })
    }

    render() {
        return (
            <div>
                <MoodPoints points={this.state.points} />

                <button onClick={this.handleIncreaseMood}>Increase Mood</button>
                <button onClick={this.handleDecreaseMood} >Decrease Mood</button>

                <h3>My notes: </h3>

                <MoodNote
                    points={5}
                    date={'date'}
                    note={'test note'}
                />
            </div>
        )
    }
}