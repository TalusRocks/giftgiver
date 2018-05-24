import React, { Component } from 'react'

class Gift extends Component {

    constructor() {
        super()

        this.state = { 
            person: '',
            present: ''
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label>Person
                        <input type="text" 
                        className="input-person"
                        onChange={event => this.setState({ person: event.target.value })}/>
                    </label>
                    <label>Present
                        <input type="text" 
                        className="input-present"
                        onChange={event => this.setState({ present: event.target.value })}/>
                    </label>
                </form>
                <button 
                    className="btn-remove"
                    onClick={() => this.props.removeGift(this.props.gift.id)}
                >
                    Remove Gift
                </button>
            </div>
        )
    }
}

export default Gift