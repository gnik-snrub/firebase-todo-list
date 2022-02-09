import { TodoComplete, TodoElementStyled, TodoPriority, TodoRemove, TodoText } from "./TodoElementStyled"

const TodoElement = (props) => {
    const {todo, edit, remove, id} = props

    const textElement = () => {
        return (
            <TodoText value={todo.getText()} onChange={editText} />
        )
    }

    const editText = (event) => {
        edit('text', id, event.target.value)
    }

    const priorityElement = () => {
        const getColor = (num) => {
            switch (num) {
                case 0:
                    return 'rgba(229, 240, 16, 1)'
                case 1:
                    return 'rgba(222, 122, 0, 1)'
                default:
                    return 'rgba(207, 3, 0, 1)'
            }
        }
        return (
            <TodoPriority onClick={editPriority} bg={getColor(todo.getPriority())} />
        )
    }

    const editPriority = () => {
        edit('priority', id)
    }

    const completeElement = () => {
        return (
            <TodoComplete onClick={editComplete} status={todo.getComplete()}>
                {todo.getComplete() ? '✓' : ''}
            </TodoComplete>
        )
    }

    const editComplete = () => {
        edit('complete', id)
    }

    const removeElement = () => {
        return (
            <TodoRemove onClick={removeTodo}>X</TodoRemove>
        )
    }

    const removeTodo = () => {
        remove(id)
    }

    return (
        <TodoElementStyled>
            {textElement()}
            {priorityElement()}
            {completeElement()}
            {removeElement()}
        </TodoElementStyled>
    )
}

export default TodoElement