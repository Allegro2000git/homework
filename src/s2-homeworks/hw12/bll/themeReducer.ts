type Theme = {
    themeId: number
}

const initState: Theme = {
    themeId: 1,
}

type SetThemeIdAT = {
    type: 'SET_THEME_ID',
    id: number
}

export const themeReducer = (state: Theme = initState, action: SetThemeIdAT): Theme => {
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId= (id: number): SetThemeIdAT  => ({ type: 'SET_THEME_ID' as const, id })
