import React, { useState } from 'react'

function TodoInput(props) {
    const [inputText, setInputText] = useState('');
    const handleEnterPress = (e) =>{
        if(e.keyCode === 13){
            props.addList(inputText)
            setInputText('')
        }
    }
  return (
    <div className='input-container'>
        <input  type='text' 
                className='input-box-todo'
                placeholder='Enter Todo'
                value={inputText}
                onChange={(e)=>{
                    setInputText(e.target.value)
                }}
                onKeyDown={handleEnterPress}>
        </input>
        <button className='add-btn'
                onClick={()=>{
                    props.addList(inputText)
                    console.log()
                    setInputText('')
                }}
        >+</button>
    </div>
  )
}

export default TodoInput