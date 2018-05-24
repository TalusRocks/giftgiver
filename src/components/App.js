import React, { Component } from 'react'
import Gift from './Gift'
import { max_number } from '../helper'

class App extends Component {

    constructor() {
        super()

        this.state = { gifts: [] }
    }

    addGift = () => {
        const { gifts } = this.state 

        const ids = this.state.gifts.map(gift => gift.id)

        gifts.push({ id: max_number(ids) + 1 })

        this.setState({ gifts })
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter(el => el.id != id)

        this.setState({ gifts })
    }

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className="gift-list">
                    {
                        this.state.gifts.map(el => {
                            return ( 
                                <Gift 
                                key={el.id}
                                gift={el}
                                removeGift={this.removeGift}
                                />
                            )
                        })
                    }
                </div>
                <button className="btn-add" onClick={this.addGift}>Add Gift</button>
            </div>
        )
    }
}

export default App