import React from 'react'

function Greet(props) {
    return (
          <>
                <h1>Hello {props.name} aka {props.heroName}</h1>
                {props.children}
          </>
    )
}

export default Greet
