import { useState } from 'react';
import Header from './Components/header/Header';
import TodoList from './Components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter={filter}/>
    </DarkModeProvider>
  );
}

export default App;
