import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { todosKeys } from "../queries/query-keys";

export function useTodosQuery() {
    const todosQuery = useQuery({
        // key for caching
        queryKey: todosKeys.all(),
        queryFn: getTodos,
        // staleTime: 5 * 60 * 1000,
        retry: 0,
        initialData: [],
        // enabled:
    })

    return todosQuery;
}


async function getTodos() {
    const result = await axios.get('https://dummyjson.com/todos');
    return result.data.todos;
}