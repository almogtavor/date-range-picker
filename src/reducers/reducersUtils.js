export function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues)
}

export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        // console.log(state);
        // console.log(action);
        if (handlers.hasOwnProperty(action.type)) {
            // console.log(action.type);
            // console.log(handlers);
            // console.log(handlers[action.type](state, action));
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}