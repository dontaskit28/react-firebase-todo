import React from 'react'
const Task = ({task, onDelete,onToggle}) => {
  return (
    <div>
      <h3 style ={task.completed ? taskStyle : taskStyle2} key={task.id}>
        <input type="checkbox" checked={task.completed} onChange={()=> onToggle(task.id,task.completed)}/>
        {'  ' + task.title} 
      <button style={buttonStyle} onClick={()=>onDelete(task.id)}>X</button></h3>
    </div>
  )
}
const taskStyle ={
    background:'#f4f4f4',
    color:'green',
    padding:'5px 20px',
    fontSize : '30px',
    borderRadius: "10px"

}

const taskStyle2 ={
  color:'blue',
  padding:'5px 20px',
  fontSize : '30px',
  
}

const buttonStyle={
  background: 'black',
  cursor: 'pointer',
  color: 'red',
  minHeight:'40px',
  minWidth:'40px',
  borderRadius:'20%',
  float:'right',
}

export default Task
