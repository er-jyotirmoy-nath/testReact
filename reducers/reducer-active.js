


const userActive =  (state = {},action) => {
    switch (action.type){
        case 'USER_SELECTED':
            return action.payload
    }
    return state;
}
