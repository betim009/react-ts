// export const action = {
//     type: 'INCREMENT_COUNTER',
// };

export const actionCreator = (increment = 1) => ({
    type: 'INCREMENT_COUNTER',
    payload: increment,
});

export const clickCounter = () => ({
    type: 'INCREMENT_CLICKS',
});