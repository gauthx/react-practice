import { useReducer, useState } from 'react';

type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

type TodoList = Task[];

enum ActionTypes {
  toggle = 'toggle-task',
  delete = 'delete-task',
  addTask = 'add-task',
}

type Action =
  | { type: ActionTypes.toggle; id: number }
  | { type: ActionTypes.delete; id: number }
  | { type: ActionTypes.addTask; title: string };

type Dispatcher = (action: Action) => void;

type TaskProps = Task & {
  dispatch: Dispatcher;
};

const AddTask = ({ onAdd }: { onAdd: Dispatcher }) => {
  const [title, setTitle] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onAdd({ title, type: ActionTypes.addTask });
        setTitle('');
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

const reducer = (todoList: TodoList, action: Action) => {
  switch (action.type) {
    case ActionTypes.toggle:
      return todoList.map((task: Task) =>
        task.id === action.id ? { ...task, isDone: !task.isDone } : task,
      );

    case ActionTypes.delete:
      return todoList.filter((task: Task) => task.id !== action.id);

    case ActionTypes.addTask:
      const newTask = {
        id: todoList.length + 1,
        title: action.title,
        isDone: false,
      };
      return [...todoList, newTask];

    default:
      return todoList;
  }
};

const Task = ({ id, title, isDone, dispatch }: TaskProps) => (
  <div>
    <p onClick={() => dispatch({ type: ActionTypes.toggle, id })}>
      {isDone ? <s>{title}</s> : title}
    </p>
    <button onClick={() => dispatch({ type: ActionTypes.delete, id })}>
      Delete
    </button>
  </div>
);

const App = () => {
  const initialTodoList: TodoList = [
    { id: 1, title: 'Buy coffee', isDone: false },
    { id: 2, title: 'Buy eggs', isDone: true },
    { id: 3, title: 'Buy apples', isDone: false },
  ];

  const [todoList, dispatch] = useReducer(reducer, initialTodoList);

  return (
    <div>
      {todoList.map(({ id, title, isDone }) => (
        <Task
          key={id}
          id={id}
          title={title}
          isDone={isDone}
          dispatch={dispatch}
        />
      ))}

      <AddTask onAdd={dispatch} />
    </div>
  );
};

export default App;
