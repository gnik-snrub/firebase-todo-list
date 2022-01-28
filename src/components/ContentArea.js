import GenericButton from "./GenericButton"
import styled from "styled-components"
import todo from "../lib/todo"
import TodoElement from "./TodoElement"

const ContentArea = (props) => {
	const {saveData, addTodo, edit, remove, auth} = props

    const editTodo = (field, id, value = null) => {
        edit(field, id, value)
    }

    const removeTodo = (id) => {
        remove(id)
    }

	const printData = () => {
        let id = 0
		return saveData.map((todo) => {
			return <TodoElement todo={todo} edit={editTodo} remove={removeTodo} id={id++} key={id} />
		})
	}

	const addEvent = () => {
		addTodo(todo())
	}

    return (
        <Content>
			{printData()}
			{auth && <AddTodoButton onClick={addEvent}>+</AddTodoButton> }
        </Content>
    )
}

const Content = styled.main`
    width: 100%;
    display: grid;
    place-items: center;
    padding-bottom: 54px;
    padding-top: 21px;
`

const AddTodoButton = styled(GenericButton)`
    margin-top: 10px;
    background-color: inherit;
    padding: 0px;
    border-radius: 10px;
`

export default ContentArea