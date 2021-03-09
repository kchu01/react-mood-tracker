import { Component } from 'react'
import MoodPoints from '../mood-points/MoodPoints.jsx'
import MoodNote from '../mood-note/MoodNote.jsx'
import placeHolderNotes from './placeHolderNotes.js'

export default class MoodTracker extends Component {
    //class state
    state = {
        points: 0,
        noteInput: '',
        noteData: []
    }

    // event handlers
    handleIncreaseMood = () => {
        this.setState((prevState, props) => {
            return { points: prevState.points + 1 }
        })
    }

    handleDecreaseMood = () => {
        this.setState((prevState, props) => {
            return { points: prevState.points - 1 }
        })
    }

    handleInputChange = (e) => {
        this.setState({
            noteInput: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState((prevState, props) => {
            const newNoteData = {
                note: prevState.noteInput,
                date: new Date().toLocaleDateString(),
                points: prevState.points
            }
            return {
                noteData: [...prevState.noteData, newNoteData]
            }
        }, () => this.setState({ noteInput: '' }))
    }

    render() {
        const noteComponents = this.state.noteData.map((placeHolderNote, index) => {
            return (
                <MoodNote
                    key={`note ${index}`}
                    points={placeHolderNote.points}
                    date={placeHolderNote.date}
                    note={placeHolderNote.note}
                />
            )
        })

        return (
            <div>
                <MoodPoints points={this.state.points} />

                <button onClick={this.handleIncreaseMood}>Increase</button>
                <button onClick={this.handleDecreaseMood}>Decrease</button>

                <h3>Mood Notes:</h3 >

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='note-input'>New Note:</label>

                    <input
                        id='note-input'
                        type='text'
                        onChange={this.handleInputChange}
                        placeholder='How do you feel?'
                    />

                    <input
                        type='submit'
                        value='Save Note'
                    />
                </form>

                {noteComponents}
            </div>
        )
    }
}
