import { Container, CssBaseline } from "@mui/material";
import List from '@mui/material/List';
import { useTodosQuery } from "../hooks/useTodosQuery";
import { useTodosUpdate } from "../hooks/useTodoUpdate";
import TodoListItem from "./TodoListItem";


export default function TodoList() {
    const todosQuery = useTodosQuery();
    const todoMutation = useTodosUpdate();

    const todoClickHandler = (todo) => {
        // Update server
        const updatedTodo = { ...todo, completed: !todo.completed };
        console.log(updatedTodo);
        todoMutation.mutate(updatedTodo);
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <h1>Todo List</h1>

            {todosQuery.isError

                ? <div>Failed to load todos</div>
                : todosQuery.isFetching
                    ? <div>Loading data....</div>
                    : (
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {todosQuery.data.map((todo) =>
                                <TodoListItem
                                    key={todo.id}
                                    clickHandler={todoClickHandler}
                                    todo={todo} />
                            )}
                        </List>
                    )}
        </Container>
    )
}

// Service layer
// async function getTodos() {
//     const result = await axios.get('https://dummyjson.com/todos')
//     // const response = await fetch('https://dummyjson.com/todos');

//     // It's included in axios

//     // if (!response.ok) {
//     //     throw....
//     // }
//     // const result = await response.json();

//     return result.data.todos;
// }


// Without React Query

// function useGetTodos() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         (async () => {
//             const response = await fetch('https://dummyjson.com/todos');

//             const result = await response.json();
//             setTodos(result.todos);


//         })()
//     }, [])

//     console.log(todos);
//     return [todos, setTodos];
// }
