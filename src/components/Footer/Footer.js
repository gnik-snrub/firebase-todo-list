import StyledFooter from "./FooterStyled"

const Footer = (props) => {
    const {count} = props
    return (
        <StyledFooter count={count}>
            ↓
        </StyledFooter>
    )
}

export default Footer