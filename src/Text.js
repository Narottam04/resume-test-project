import React, { useState,useReducer } from 'react'

const reducer = (state,action) => {
    if(action.type === 'ADD_VALUE') {
        return {
            ...state,
            [action.name]: action.value
        }
    }
    else {
        return state
    }
}
const Text = ({ ...props }) => {

    // using useReducer
    const initialState = {
        
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    
    const handleChange = (e) => {
        const name = e.target.getAttribute("name")
        const value = e.target.innerHTML
        dispatch({type:'ADD_VALUE', name: name, value: value})
        console.log(state)
    }

    // using useState
    // const [data, setData] = useState({
    //     Header:'',
    //     subHeader: '',
    //     location: ''
    // })

    // // it runs when a user type on the field
    // const handleChange = (e) => {
    //     const name = e.target.getAttribute("name")
    //     const value = e.target.innerHTML
    //     setData({...data,[name]:value })
    //     console.log(data)
    // }
    return (
        <div className="" >
            <p
                id="output"
                className="selectableTextArea "
                contentEditable
                {...props}
                value = {state}
                onKeyUp = {handleChange}
                suppressContentEditableWarning
                spellCheck='false'
            >
            </p>
        </div>
    )
}

export default Text
