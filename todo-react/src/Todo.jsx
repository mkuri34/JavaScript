import { useState } from 'react';
import './style.css';
import { InputTodo } from './components/inputTodo';
import { IncompleteTodos } from './components/incompleteTodos';
import { CompleteTodos } from './components/completeTodos';

export const Todo = () => {
  const [TodoText,setTodoText] = useState("");

  const [incompleteTodos,setInconpleteTodos] = useState([]);

  const [completeTodos,setConmpleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    return(
      setTodoText(event.target.value)
    );
  }

  const onClickAdd = () =>{
    if(TodoText === ""){
      return;
    }

    const newTodos = [...incompleteTodos, TodoText];
    setInconpleteTodos(newTodos);
    setTodoText("");
  }

  const onClickdelete = (index) =>{
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setInconpleteTodos(newTodos);
  }

  const onClickComplete = (index) =>{
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setInconpleteTodos(newIncompleteTodos);

    const newConpleteTodos = [...completeTodos, incompleteTodos[index]];
    setConmpleteTodos(newConpleteTodos);
  }

  const onClickreturn = (index) =>{
    const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];
    setInconpleteTodos(newIncompleteTodos);

    const newConpleteTodos = [...completeTodos];
    newConpleteTodos.splice(index, 1);
    setConmpleteTodos(newConpleteTodos);
  }

  return (
    <>
      <InputTodo todoText={TodoText} onChange={onChangeTodoText} onClick={onClickAdd}/>
      {incompleteTodos.length >= 5 && (
        <p style={{color:"red"}}>
          登録できるTODOは5個まで,消化しろよ～
        </p>
      )}
      <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickdelete={onClickdelete}/>
      <CompleteTodos todos={completeTodos} onClick={onClickreturn}/>
    </>
  );
}

