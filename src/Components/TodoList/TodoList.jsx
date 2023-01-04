import React, { useState ,useRef} from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
export default function TodoList({value}) {
   const [todos, setTodos] = useState([
      {id : '123' , text : '장보기' , status : 'active'},
      {id : '124' , text : '공부하기' , status : 'active'},
   ]);

   const handleAdd = (todo) =>setTodos([...todos, todo]);
   const handleUpdate = (updated) => setTodos(todos.map(todo => todo.id === updated.id ? updated : todo));
   const handleDelete = (deleted) => setTodos(todos.filter(todo => todo.id !== deleted.id));


   return (
      <section>
         <ul>
            {
               todos.map(item =>{
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

