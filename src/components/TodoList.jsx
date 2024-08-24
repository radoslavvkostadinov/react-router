import { Container, CssBaseline } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { useState } from "react";
import { useTodosQuery } from "../hooks/useTodosQuery";


export default function TodoList() {

    // const [todos] = useGetTodos();
    // const todosQuery = useQuery({
    //     // key for caching
    //     queryKey: ['todos'],
    //     queryFn: getTodos,
    //     staleTime: 10000,
    // })
    const todosQuery = useTodosQuery();
    const [checked, setChecked] = useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    // if (todosQuery.isError) {
    //     return <h2>{todosQuery.error.message}</h2>
    // }

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
                            {todosQuery.data.map(({ todo, id }) => {
                                const labelId = `checkbox-list-label-${id}`;

                                return (
                                    <ListItem
                                        key={id}
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="comments">
                                                <CommentIcon />
                                            </IconButton>
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton role={undefined} onClick={handleToggle(todo)} dense>
                                            <ListItemIcon>
                                                <Checkbox
                                                    edge="start"
                                                    checked={checked.indexOf(id) !== -1}
                                                    tabIndex={-1}
                                                    disableRipple
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText id={labelId} primary={`${todo + 1}`} />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
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
