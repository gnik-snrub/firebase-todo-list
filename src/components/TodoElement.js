import styled, { css } from 'styled-components'
import { GenericContentAreaButton } from './GenericButton'

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

const TodoElementStyled = styled.section`
    width: 25vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TodoText = styled.input`
    height: 20px;
    width: 80%;
    color: #363D59;
    border: 0;
    border-bottom: 1px solid #23395B;
    background-color: inherit;
    outline: none;
    padding-bottom: 1px;
    margin-right: 2px;
    &:focus {
        border-bottom: 2px solid #AF3B6E;
        padding-bottom: 0px;
    }
`

const TodoPriority = styled(GenericContentAreaButton)`
    background-color: ${props => props.bg};
    &:hover {
        transform: rotate(45deg);
        border-radius: 15px;
        border: 1px solid #AF3B6E;
    }
`

const TodoComplete = styled(GenericContentAreaButton)`
    &:hover {
        background-color: #E3BAC6;
    }
    ${props => props.status && css`
        background-color: #E3BAC6;
        color: #363D59;
        &:hover{
            color: #AF3B6E;
            background-color: #fde8e9;
        }
    `}
`

const TodoRemove = styled(GenericContentAreaButton)`
    &:hover {
        background-color: #E3BAC6;
    }
`

export default TodoElement