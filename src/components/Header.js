import styled, { css } from 'styled-components'

const Header = (props) => {
    const {auth, signIn, signOut, saveAllData} = props

    const save = () => {
        saveAllData()
    }

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
                    <HeaderButton onClick={save}>Save</HeaderButton>
                </HeaderButtonWrapper>
            )
        }
    }

    return (
        <HeaderWrapper>
            <Title>Todo-List</Title>
            {getButtons()}
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
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

const HeaderButtonWrapper = styled.section`
    width: 20vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;

    ${props => props.solo && css`
        grid-template-columns: 1fr;
    `}

`

const Title = styled.h1`
    height: 100%;
    display: grid;
    place-items: center;
`

const AuthButton = (props) => {
    const {func, label} = props
    return (
        <HeaderButton onClick={func}>
            {label}
        </HeaderButton>
    )
}

const HeaderButton = styled.button`
    border: 1px solid transparent;
    background-color: #473198;
    transition: 0.2s;
    border: 1px solid transparent;
    color: #9BF3F0;
    &:hover {
        border: 1px solid #9BF3F0;
        color: #473198;
        background-color: #9BF3F0;
    }
`

export default Header