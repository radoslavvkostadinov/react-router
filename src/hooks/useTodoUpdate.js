import { useMutation, useQueryClient } from "@tanstack/react-query";
import todoService from "../services/todoService";
import { todosKeys } from "../queries/query-keys";

export function useTodosUpdate() {
    const queryClient = useQueryClient();

    const todoMutation = useMutation({
        mutationFn: todoService.updateTodo,
        mutationKey: todosKeys.update(),
        onSuccess: ({data}) => {
            // queryClient.invalidateQueries(todosKeys.all())
            console.log(data);
            queryClient.setQueriesData(todosKeys.all(), (oldTodos) => {
                return oldTodos.map((todo) => todo.id === data.id ? data : todo);
            })

        }
    })

    return todoMutation;
}
