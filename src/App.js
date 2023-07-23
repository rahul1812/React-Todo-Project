import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import TodoForm from  './components/TodoForm';

function App() {
  const [todos , setTodo] = useState([
    { rowNumber : 1, rowDescrition : 'Hair cut', rowAssigned : 'Eemy'},
    { rowNumber : 2, rowDescrition : 'Feed puppy', rowAssigned : 'Albert'},
    { rowNumber : 3, rowDescrition : 'plant water', rowAssigned : 'Ramesh'},
    { rowNumber : 4, rowDescrition : 'Drink Milk', rowAssigned : 'Umesh'}
  ]);

  const [showAddTodoForm,setShowAddTodoForm] =useState(false);

  const addTodo = (description,assigned)=>{
    if(todos.length>0){
     const newTodo = {
      rowNumber : todos.length+1,
      rowDescrition : description,
      rowAssigned : assigned
     }
      setTodo(todo=>[...todos,newTodo]);
    }   
  } 

const deleteTodo = (deleteTodoRownumber)=>{
     let filtered = todos.filter(function(value){
      return value.rowNumber !== deleteTodoRownumber;
     })
     setTodo(filtered);
}

  return (    
      <div className='mt-5 container'>
        <div className='card'>
          <div className='card-header'>
            Yours Todos
          </div>
          <div className='card-body'>
         <TodoTable todos={todos}  deleteTodo={deleteTodo}/>
         <button className='btn btn-primary' onClick = {()=>{setShowAddTodoForm(!showAddTodoForm)}}>
            {showAddTodoForm?'close Todo':'open Todo'}
          </button>
          {
            showAddTodoForm && <TodoForm addTodo={addTodo}/>
          }          
          </div>
        </div>
      </div>   
  );
}

export default App;
