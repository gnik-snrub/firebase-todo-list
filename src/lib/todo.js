const todo = () => {
    let text = ''
    let complete = false
    let priority = 0

    const getText = () => { return text }
    const setText = (newText) => { text = newText }

    const getComplete = () => { return complete }
    const toggleComplete = () => { complete = !complete }

    const getPriority = () => { return priority }
    const togglePriority = () => {
        switch (priority) {
            case 0:
                priority = 1
                break
            case 1:
                priority = 2
                break
            default:
                priority = 0
        }
    }

    return {
        getText, setText,
        getComplete, toggleComplete,
        getPriority, togglePriority
    }
}

export default todo