import { useRef, useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

const mockData = [
    {
      id : 0,
      isDone : false,
      content : "react 공부하기",
      date : new Date().getTime()
    },
    {
      id : 1,
      isDone : false,
      content : "빨래하기",
      date : new Date().getTime()
    },
    {
      id : 2,
      isDone : false,
      content : "노래연습하기",
      date : new Date().getTime()
    }
  ]

function App() {

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime()
    }

    setTodos([newTodo, ...todos])
  }

  //체크박스 설정
  const onUpdate = (targetId) => {
    // todos state의 값들중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    setTodos(todos.map((todo)=> todo.id === targetId ? {...todo, isDone : !todo.isDone} : todo))
  }

  //삭제 버튼 활성화
  const onDelete = (targetId) => {
    setTodos(todos.filter((todo)=>todo.id !== targetId))
  }

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} 
      onDelete={onDelete} />
    </div>
  )
}

export default App
