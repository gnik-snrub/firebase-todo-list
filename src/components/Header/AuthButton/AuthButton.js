import HeaderButton from "./AuthButtonStyled"

const AuthButton = (props) => {
    const {func, label} = props
    return (
        <HeaderButton onClick={func}>
            {label}
        </HeaderButton>
    )
}

export default AuthButton