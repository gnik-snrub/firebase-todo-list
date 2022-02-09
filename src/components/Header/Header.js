import AuthButton from './AuthButton/AuthButton'
import { HeaderButtonWrapper, HeaderWrapper, Title } from './HeaderStyled'

const Header = (props) => {
    const {auth, signIn, signOut, title} = props

    const getButtons = () => {
        if (!auth) {
            return (
                <HeaderButtonWrapper solo>
                    <AuthButton label={'Sign In'} func={signIn} />
                </HeaderButtonWrapper>
            )
        } else {
            return (
                <HeaderButtonWrapper>
                    <AuthButton label={'Sign Out'} func={signOut} />
                </HeaderButtonWrapper>
            )
        }
    }

    return (
        <HeaderWrapper>
            <Title>{title}</Title>
            {getButtons()}
        </HeaderWrapper>
    )
}

export default Header