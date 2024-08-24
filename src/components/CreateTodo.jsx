import Button from '@mui/material/Button';
import { Container, CssBaseline, TextField } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { todosKeys } from '../queries/query-keys';

export default function CreateTodo() {
    const navigate = useNavigate();
    const { id: userId } = useAuthContext();
    const queryClient = useQueryClient();
    const createTodoMutation = useMutation({
        mutationFn: createTodo,
        mutationKey: ['new-todo'],
        onSuccess: () => {
            queryClient.invalidateQueries(todosKeys.all())

            // Update cache manually from response
            // queryClient.setQueryData(todosKeys.all(), (oldCache) => {
            //     const newCache = [...oldCache, data];
            //     return newCache;

            // })
        }
    });

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        console.log(formData.get('title'));
        createTodoMutation.mutate({ title: formData.get('title'), userId });
        navigate('/todos');
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <form onSubmit={formSubmitHandler}>
                <TextField id="standard-basic" label="Title" name="title" variant="standard" />
                <Button
                    type='submit'
                    variant="outlined"

                >
                    Create
                </Button>
            </form>
        </Container>
    )
}

async function createTodo({ title, userId }) {
    return await axios.post('https://dummyjson.com/todos/add', {
        todo: title,
        completed: false,
        userId,
    })
}


