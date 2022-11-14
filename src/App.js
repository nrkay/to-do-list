import logo from './logo.svg';
import './App.css';
import { AddTodo } from './components/AddTodo';
import { TodoLists } from './components/TodoLists';

function App() {
  return (
    <>
      <AddTodo />
    <TodoLists />
    </>
    
  );
}

export default App;
