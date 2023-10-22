import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';


type ActionType = {
    type: string,
}

const INITIAL_STATE = {
    count: 0, // altere aqui e veja no devtols
};

const reducer = (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case "INCREMENT_COUNTER": {
            return {
                count: state.count + 1,
            };
        }
        default: return state;
    }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
