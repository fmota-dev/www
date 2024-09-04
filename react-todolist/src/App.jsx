import { useState } from "react";
import "./App.css";

import Filter from "./components/Filter";
import Search from "./components/Search";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => (todo.id !== id ? todo : null));
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("asc");

  return (
    <div className="app">
      <h1>Gerenciador de Tarefas</h1>
      <TodoForm addTodo={addTodo} />

      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <ul>
        {todos
          .filter((todo) => {
            if (filter === "all") {
              return todo;
            }

            if (filter === "completed") {
              return todo.isCompleted;
            }

            return !todo.isCompleted;
          })
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => {
            if (sort === "asc") {
              return a.text.localeCompare(b.text);
            }

            return b.text.localeCompare(a.text);
          })
          .map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </ul>
    </div>
  );
}

export default App;
