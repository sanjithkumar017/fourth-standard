export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("fourth-standard-state");
        if (serializedState === null) {
            return undefined
        } else {
            return JSON.parse(serializedState)
        }
    }
    catch (e) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem("fourth-standard-state", serializedState)
    }
    catch (e) {
        console.error("Error Saving the State")
    }
}