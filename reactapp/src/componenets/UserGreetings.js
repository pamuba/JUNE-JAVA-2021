import React, { Component } from 'react'

export class UserGreetings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        // if(this.state.isLoggedIn)
        //     return(
        //         <div>Welcome John</div> 
        //     )
        // else{
        //     return(
        //         <div>Welcome Guest</div>  
        //     )
        // }

        return this.state.isLoggedIn ? (
            <div>Welcome John</div>
        ):(
            <div>Welcome Guest</div> 
        )
    }
}

export default UserGreetings
