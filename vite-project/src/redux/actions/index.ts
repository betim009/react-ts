// export const action = {
//     type: 'INCREMENT_COUNTER',
// };

export const actionCreator = (increment = 1) => ({
    type: 'INCREMENT_COUNTER',
    payload: increment,
});