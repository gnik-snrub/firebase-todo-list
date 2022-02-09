import { GenericContentAreaButton } from "../GenericButton"
import styled from "styled-components"

export const Content = styled.main`
width: 100%;
display: grid;
place-items: center;
padding-bottom: 54px;
padding-top: 21px;
`

export const AddTodoButton = styled(GenericContentAreaButton)`
margin-top: 10px;
background-color: inherit;
padding: 0px;
border-radius: 10px;
transition: 0.4s;
&:hover, &:focus {
    color: #23395B;
    background-color: #E3BAC6;
    width: 50px;
}
`