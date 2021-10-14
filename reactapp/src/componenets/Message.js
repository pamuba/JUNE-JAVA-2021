import React, { Component } from 'react'

class Message extends Component {

    constructor(props) {
        super(props)
    
        // this.state can be used only inside te ctr to set a value
        this.state = {
             message:'Welcome to Mars'
        }
    }
    changeMesg(){
        // setState is aync
        this.setState({
            message:'Welcome to Pluto'
        })
    }
    render() {
        return (
            <>
              {this.state.message}  
              <button onClick={()=>{this.changeMesg()}}>CHANGE</button>
            </>
        )
    }
}

export default Message
