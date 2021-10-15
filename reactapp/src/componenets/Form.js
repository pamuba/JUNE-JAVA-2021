import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'VueJS'
        }
    }
    handleUsername = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    handleComments = (event) => {
        this.setState({
            comments:event.target.value
        })
    }
    handleTopic = (event) => {
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <>
                    <label>Username</label>
                    <input 
                    value={this.state.username}
                    onChange={this.handleUsername} 
                    type="text"/>
                </>
                <br></br>
                <>
                    <label>Comments</label>
                    <textarea 
                    value={this.state.comments}
                    onChange={this.handleComments} 
                    type="text"/>
                </>
                <br></br>
                <>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopic}>
                        <option value="React">react</option>    
                        <option value="Angular">Angular</option>    
                        <option value="VueJS">VueJS</option>    
                    </select> 
                    
                </>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
