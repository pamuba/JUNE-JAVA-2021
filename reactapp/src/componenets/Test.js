import React, { Component } from 'react'

class Test extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )

        // return React.createElement('div', {id:'name'}, React.createElement('h1', null, 'Hello World'))
    }
}

export default Test
