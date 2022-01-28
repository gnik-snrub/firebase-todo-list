import styled, { css } from 'styled-components'
import GenericButton from './GenericButton'

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
    color: #9BF3F0;
    border: 0;
    border-bottom: 1px solid #9BF3F0;
    background-color: inherit;
    outline: none;
    padding-bottom: 1px;
    margin-right: 2px;
    &:focus {
        border-bottom: 2px solid #ADFC92;
        padding-bottom: 0px;
    }
`

const TodoPriority = styled(GenericButton)`
    background-color: ${props => props.bg};
    &:hover {
        transform: rotate(90deg);
        border: 1px solid #9BF3F0;
    }
`

const TodoComplete = styled(GenericButton)`
    ${props => props.status && css`
        background-color: #9BF3F0;
        color: #4A0D67;
    `}
`

const TodoRemove = styled(GenericButton)``

export default TodoElement