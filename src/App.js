import React, { useRef, useState, useCallback } from 'react';
import Templates from './Components/Templates';
import './Components/Templates.scss'
import './Components/Insert.scss'
import './Components/ListItem.scss'
import './Components/List.scss'
import Insert from './Components/Insert';
import List from './Components/List';

const App = () => {

  const [todo, setTodo] = useState([
    {
      id: 1,
      text: 'study react',
      checked: true
    },
    {
      id: 2,
      text: 'study javascript',
      checked: true
    },
    {
      id: 3,
      text: 'study vue.js',
      checked: false
    },
  ])

  // Add todo
  const nextId = useRef(4)
  const onInsert = useCallback(text => {
    const todos = {
      id: nextId.current,
      text,
      checked: false
    }
    setTodo(todo.concat(todos))
    nextId.current += 1
  }, 
  [todo])

  // Remove Todo 
  const removeTodo = useCallback(id => {
    setTodo(todo.filter(item => item.id !== id))
  }, [todo])

  // Modify Todo
  const onToggle = useCallback(
    id => {
    setTodo(todo.map
      ( todo => todo.id === id? {...todo, checked: !todo.checked } : todo, 
        ), 
      )
  }, [todo])
  
  return (
    
    <Templates>
      <Insert onInsert={onInsert}/>
      <List todo={todo} removeTodo={removeTodo} onToggle={onToggle}/>
    </Templates>
  );
};

export default App;

// import React, { useRef, useState, useCallback } from 'react';
// import Templates from './Components/Templates';
// import './Components/Templates.scss'
// import './Components/Insert.scss'
// import './Components/ListItem.scss'
// import './Components/List.scss'
// import Insert from './Components/Insert';
// import List from './Components/List';

// function createBulkTodos() {
//   const array = []
//   for (let i = 1; i <= 2500; i++) {
//     array.push({
//       id: i,
//       text: `To do ${i}`,
//       checked: false,
//     })
//   }
//   return array
// }
// const App = () => {

//   const [todo, setTodo] = useState(createBulkTodos)

//   // Add todo
//   const nextId = useRef(4)
//   const onInsert = useCallback(text => {
//     const todos = {
//       id: nextId.current,
//       text,
//       checked: false
//     }
//     setTodo(todo.concat(todos))
//     nextId.current += 1
//   }, 
//   [])

//   // Remove Todo 
//   const removeTodo = useCallback(id => {
//     setTodo(todo.filter(item => item.id !== id))
//   }, [])

//   // Modify Todo
//   const onToggle = useCallback(
//     id => {
//     setTodo(todo => 
//       todo.map(todo => todo.id === id? {...todo, checked: !todo.checked } : todo, 
//         ), 
//       )
//   }, [])
  
//   return (
    
//     <Templates>
//       <Insert onInsert={onInsert}/>
//       <List todo={todo} removeTodo={removeTodo} onToggle={onToggle}/>
//     </Templates>
//   );
// };

// export default App;

// import React, { useRef, useState, useCallback, useReducer } from 'react';
// import Templates from './Components/Templates';
// import './Components/Templates.scss'
// import './Components/Insert.scss'
// import './Components/ListItem.scss'
// import './Components/List.scss'
// import Insert from './Components/Insert';
// import List from './Components/List';

// function createBulkTodos() {
//   const array = []
//   for (let i = 1; i <= 2500; i++) {
//     array.push({
//       id: i,
//       text: `To do ${i}`,
//       checked: false,
//     })
//   }
//   return array
// }
// function todoReducer(todo, action) {
//   switch (action.type) {
//     case 'INSERT' :
//       return todo.concat(action.todo)
//     case 'REMOVE' :
//       return todo.filter(item => item.id !== action.id)
//     case 'TOGGLE' :
//       return todo.map (todo => todo.id ? {...todo, checked: !todo.checked} : todo, )
//     default: 
//       return todo;
//   }
// }
// const App = () => {

//   const [todo, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)

//   // Add todo
//   const nextId = useRef(2501)
//   const onInsert = useCallback(text => {
//     const todos = {
//       id: nextId.current,
//       text,
//       checked: false
//     }
//     dispatch({type: 'INSERT', todo})
//     nextId.current += 1
//   }, 
//   [])

//   // Remove Todo 
//   const removeTodo = useCallback(id => {
//     dispatch({type: 'REMOVE', id})
//   }, [])

//   // Modify Todo
//   const onToggle = useCallback(id => {
//     dispatch({type: 'TOGGLE', id})
//   }, [])
  
//   return (
    
//     <Templates>
//       <Insert onInsert={onInsert}/>
//       <List todo={todo} removeTodo={removeTodo} onToggle={onToggle}/>
//     </Templates>
//   );
// };

// export default App;