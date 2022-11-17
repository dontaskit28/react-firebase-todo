import Header from './components/Header';
import NewTask from './components/NewTask';
import Tasks from './components/Tasks'
import { useState,useEffect } from 'react'
import React from 'react'
import { collection,getDocs,addDoc,updateDoc,doc,deleteDoc } from 'firebase/firestore'
import {db} from './firebase_config'

function App() {
  const [tasks,setTasks] = useState([])
  const dbref = collection(db,"tasks")
  useEffect (() =>{
    const getTasks = async () =>{
      const data = await getDocs(dbref)
      setTasks(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    getTasks();
  },[tasks])
  const deleteTask = async (id) =>{
    const taskDoc = doc(db,"tasks",id)
    await deleteDoc(taskDoc)
  }
  
  const newTask = async (task) =>{
    await addDoc(dbref,{title:task,completed:false})
  }
  const onToggle = async (id,completed) => {
    const taskDoc = doc(db,"tasks",id)
    await updateDoc(taskDoc,{completed:!completed})
  }

  return (
    <div style={pageStyle}>
      <Header />
      <NewTask onAdd={newTask}/>
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={onToggle}/>  
    </div>
  );
}

const pageStyle ={
  margin : "auto",
  padding: "2% 10%",
  height:'100%'
}
export default App;