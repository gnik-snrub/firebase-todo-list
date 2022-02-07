import styled from "styled-components"

const GenericButton = styled.button`
    background-color: inherit;
    border: 1px solid #23395B;
    color: #AF3B6E;
    padding: 0;
    margin: 0 2px;
    transition: 0.4s;
    outline: none;
    &:hover {
        border: 1px solid #AF3B6E;
        color: #AF3B6E;
    }
`

export const GenericContentAreaButton = styled(GenericButton)`
    width: 20px;
    height: 20px;
`

export default GenericButton