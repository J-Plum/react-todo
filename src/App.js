import styles from './App.module.css';
import TodoList from './Components/TodoList/TodoList';

function App() {
 

  return (
    <div className={styles.App}>
      <TodoList/>
    </div>
  );
}

export default App;
