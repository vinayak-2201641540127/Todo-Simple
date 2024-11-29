import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {

  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText)=>{
    if(inputText !== '')
    setListTodo([...listTodo, inputText]);
  }

  const deleteListItem = (key)=>{
    let newList = [...listTodo];
    newList.splice(key, 1);
    setListTodo(newList);
  }


  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList={addList} />
        <h1 className='app-heading'>TODO</h1>
        <hr/>
        {listTodo.map((listItem, i) =>{
          return(
            <TodoList key={i} item={listItem} index={i} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App