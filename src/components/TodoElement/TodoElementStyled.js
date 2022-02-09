import styled, { css } from 'styled-components'
import { GenericContentAreaButton } from '../GenericButton'

export const TodoElementStyled = styled.section`
    width: 25vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TodoText = styled.input`
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

export const TodoPriority = styled(GenericContentAreaButton)`
    background-color: ${props => props.bg};
    &:hover {
        transform: rotate(45deg);
        border-radius: 15px;
        border: 1px solid #AF3B6E;
    }
`

export const TodoComplete = styled(GenericContentAreaButton)`
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

export const TodoRemove = styled(GenericContentAreaButton)`
    &:hover {
        background-color: #E3BAC6;
    }
`