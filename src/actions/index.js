export const addTodo = (title) => {
    return (dispatch) => (
        dispatch({
            type: 'ADD_TODO',
            id: generateId(),
            title: title
        })
    )
};

const generateId = () => {
    return new Date().getTime() + Math.random();
};