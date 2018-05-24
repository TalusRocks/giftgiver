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
            <div className="gift-form">
                <form>
                    <input type="text" 
                    className="input-person"
                    onChange={event => this.setState({ person: event.target.value })}
                    placeholder="person"/>
                    <input type="text" 
                    className="input-present"
                    onChange={event => this.setState({ present: event.target.value })}
                    placeholder="present"/>
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