import todo from "../../lib/todo"
import TodoElement from "../TodoElement/TodoElement"
import { AddTodoButton, Content } from "./ContentAreaStyled"

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

export default ContentArea