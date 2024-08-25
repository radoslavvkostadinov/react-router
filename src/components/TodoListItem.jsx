import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from "react-router-dom";

export default function TodoListItem({
    todo,
    clickHandler
}) {
    const labelId = `checkbox-list-label-${todo.id}`;
    return (
        <ListItem
            secondaryAction={
                <MoreHorizIcon
                    edge="end"
                    aria-label="details">
                    LinkComponent={Link}
                    to={`/todos/${todo.id}`}
                </MoreHorizIcon>
            }
            disablePadding
        >
            <ListItemButton
                role={undefined}
                onClick={() => clickHandler(todo)}
                dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.todo} />
            </ListItemButton>
        </ListItem>
    );
}