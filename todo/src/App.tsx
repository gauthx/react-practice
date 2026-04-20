import { useState } from "react";
import "./App.css";

type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

type TaskProps = Task & {
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

type ListProps = { onAdd: (title: string) => void };

type TodoList = Task[];

const Task = ({ id, title, isDone, onToggle, onDelete }: TaskProps) => (
  <div>
    <p onClick={() => onToggle(id)}>{isDone ? <s>{title}</s> : title}</p>
    <button onClick={() => onDelete(id)}>Delete</button>
  </div>
);

const AddTask = ({ onAdd }: ListProps) => {
  const [title, setTitle] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onAdd(title);
        setTitle("");
      }}
    >
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    </form>
  );
};

const App = () => {
  const initialTodoList: TodoList = [
    { id: 1, title: "Buy coffee", isDone: false },
    { id: 2, title: "Buy eggs", isDone: true },
    { id: 3, title: "Buy apples", isDone: false },
  ];

  const [todoList, setTodoList] = useState<TodoList>(initialTodoList);

  const toggleTask = (targetTaskId: number) => {
    setTodoList(
      todoList.map((task) =>
        task.id === targetTaskId ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  const deleteTask = (targetTaskId: number) => {
    setTodoList(todoList.filter((task) => task.id !== targetTaskId));
  };

  const addTask = (title: string) => {
    const newTask = { id: todoList.length + 1, title, isDone: false };
    setTodoList([...todoList, newTask]);
  };

  return (
    <div>
      {todoList.map(({ id, title, isDone }, idx) => (
        <Task
          key={idx}
          id={id}
          title={title}
          isDone={isDone}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      ))}
      <AddTask onAdd={addTask} />
    </div>
  );
};

export default App;
