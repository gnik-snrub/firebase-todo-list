import styled from "styled-components"

const StyledFooter = styled.footer`
    width: 100vw;
    height: 35px;
    position: fixed;
    bottom: ${props => props.count > 25 ? '0' : '-40px'};
    background-color: inherit;
    display: grid;
    place-items: center;
    transition: 0.3s;
    box-shadow: 0px -10px 5px rgba(0, 0, 0, 0.3);
`

export default StyledFooter