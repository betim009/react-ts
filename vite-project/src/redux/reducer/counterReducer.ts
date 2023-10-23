type ActionType = {
    type: string,
    payload: number,
}

const INITIAL_STATE = {
    count: 0, // altere aqui e veja no devtols
};

const counterReducer = (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case "INCREMENT_COUNTER": {
            return {
                count: state.count + action.payload,
            };
        }
        default: return state;
    }
};

export default counterReducer;