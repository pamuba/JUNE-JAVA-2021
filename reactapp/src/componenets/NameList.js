import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {id:1,
            name:'Diana',
            age:23,
            skill:'Vue'},

        {id:2,
            name:'Bruce',
            age:13,
            skill:'Flying'}
    ]
    const personList = persons.map(person=><h2 key={person.id}>{person.name}</h2>)
    return (
        <>
            {personList}
           {/* {
               names.map(name=><h2>{name}</h2>)
           }  */}
        </>
    )
}

export default NameList
