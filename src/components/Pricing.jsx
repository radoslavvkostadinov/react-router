import { Container, CssBaseline } from "@mui/material";
import { useTodosQuery } from "../hooks/useTodosQuery";

export default function Pricing() {
    const todosQuery = useTodosQuery();
    console.log(todosQuery.data);
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <h1>Pricing</h1>
        </Container>
    )
}