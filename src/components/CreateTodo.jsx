
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
export default function CreateTodo() {
    return (
        <form action="">
            <TextField id="standard-basic" label="Title" variant="standard" />
            <Button
                variant="outlined"
                loading={false}
            >
                Create
            </Button>
        </form>
    )
}