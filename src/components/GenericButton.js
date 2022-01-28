import styled from "styled-components"

const GenericButton = styled.button`
width: 20px;
height: 20px;
background-color: inherit;
border: 1px solid #9BF3F0;
color: #9BF3F0;
padding: 0;
margin: 0 2px;
transition: 0.2s;
outline: none;
&:hover {
    border: 3px solid #ADFC92;
    color: #ADFC92;
    padding: -2px;
}
`

export default GenericButton