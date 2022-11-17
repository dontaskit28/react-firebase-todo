import React from 'react'
import {useState} from 'react'
const Task = ({onAdd}) => {
  const [task,setTask]  = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!task){
      alert("Task cannot be empty")
      return
    }
    onAdd(task)
    setTask('')
  }

  return (
    <div style={divStyle}>
    <form onSubmit={onSubmit}>
        <input type="text" placeholder=" Enter Task" value={task} style={inputField} onChange={(e)=>
          setTask(e.target.value)}></input>
        <button style={buttonStyle}>Add</button>
    </form>
    </div>
  )
}
const inputField ={
    maxWidth:'80%',
    height:'2rem',
    borderColor:'lightgrey',
    borderRadius:'10px',
    width:"45%",
    padding: '5px 10px'
}
const buttonStyle={
    background: 'lightgrey',
    cursor: 'pointer',
    float:'right',
    fontSize: '15px',
    minWidth:'20%',
    padding:'16px',
    border:"none",
    borderRadius:"10px"
} 
const divStyle ={
  position: 'sticky',
  top: '0px',
}
export default Task
