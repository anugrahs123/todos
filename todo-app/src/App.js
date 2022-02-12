import './App.css';
import {useState} from 'react'
function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Add Yours.... </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i  onClick={()=>setToDos([...toDos,{id:Date.now() , Text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      { toDos.map((value)=>{

      return ( <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(value)
              setToDos(toDos.filter(value2=>{
                if(value2.id===value.id){
                  value2.status=e.target.checked
                }
                return value2
              }))
              setToDos(toDos.filter(value2=>{
                if(!value2){
      
                }else{
                  const allvalue={id:new Date().getTime.toString(), name:Text}
                  setToDos({...toDos, allvalue})
                }
                const deleteItem = (index)=>{
                  console.log(id);
                  const updatedItems = value.filter((value)=>{
                    return index
                  
                  })
                }
            }))
          }
        }   
        
        
             value={value.text} type="checkbox" name="" id="" />
            <p>{value.Text}</p>
          </div>

          {
            toDos.map((value)=>{
              return(

                
                <div className="right" key={value.id}>
                  <h2>{value.Text}</h2>
            <i className="fas fa-times" onClick={()=>deleteItem(value,id)}></i>
          </div>
                  )
            })
          }
        </div>)
        })
       } 
       {toDos.map((value)=>{
         if(value.status){
           return(<h1>{value.Text}</h1>)
         }
         return null
       })}
      </div>
    </div>
  );
}

export default App;
