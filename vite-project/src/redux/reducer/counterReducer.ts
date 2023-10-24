type ActionType = {
    type: string,
    payload: number,
}

const INITIAL_STATE = {
    count: 0, // altere aqui e veja no devtols
    click: 0,

};

const counterReducer = (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case "INCREMENT_COUNTER": {
            return {
                ...state,
                count: state.count + action.payload,
            };
        }
        case "INCREMENT_CLICKS":
            return {
                ...state,
                click: state.click + 1,
            } 
        default: return state;
    }
};

export default counterReducer;