import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }
    change = () =>{
        this.setState({
            message: "Hiiiii"
        })
    }
    changeHandler(){
        console.log(this)
        this.setState({
            message: "Hiiiii"
        })
    }
    clickHandler(){
        console.log(this)
        this.setState({
            message: "Hiiiii"
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={this.change}>CHANGE</button>
                <button onClick={this.changeHandler.bind(this)}>CHANGE</button>
                <button onClick={this.clickHandler}>CHANGE</button>
            </>
        )
    }
}

export default EventBind
