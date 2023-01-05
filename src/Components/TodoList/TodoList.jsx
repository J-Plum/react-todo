import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
   const [todos, setTodos] = useState(
      // [
      // {id : '123' , text : '장보기' , status : 'active'},
      // {id : '124' , text : '공부하기' , status : 'active'},
      // ]
      readTodos()
   );

   const handleAdd = (todo) =>setTodos(prev => [...prev, todo]);
   // const handleAdd = (todo) =>setTodos([...todos, todo]);
   const handleUpdate = (updated) => setTodos(todos.map(todo => todo.id === updated.id ? updated : todo));
   const handleDelete = (deleted) => setTodos(todos.filter(todo => todo.id !== deleted.id));

   useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos));
   },[todos]);

   const filterd = getFilteredItems(todos, filter);

   return (
      <section className={styles.container}>
         <ul className={styles.list}>
            {
               filterd.map(item =>{
                  return <Todo
                     key={item.id} 
                     todo={item} 
                     onUpdate={handleUpdate} 
                     onDelete={handleDelete}/>
               })
            }
         </ul>
         <AddTodo onAdd={handleAdd}/>
      </section>
   );
}
function readTodos(){
   const todos = localStorage.getItem('todos');
   return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter){
   if(filter === 'all'){
      return todos;
   }
   return todos.filter(todo => todo.status === filter);
}