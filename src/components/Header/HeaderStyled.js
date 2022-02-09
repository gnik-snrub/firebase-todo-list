import styled, { css } from 'styled-components'

export const HeaderWrapper = styled.header`
    width: 100vw;
    height: 130px;
    
    position: sticky;
    top: 0;
    
    display: grid;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    
    background-color: inherit;
    
    box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.3);
`

export const HeaderButtonWrapper = styled.section`
    width: 20vw;
    display: grid;
    place-items: center;
    ${props => props.solo && css`
        grid-template-columns: 1fr;
    `}
`

export const Title = styled.h1`
    height: 100%;
    display: grid;
    place-items: center;
`