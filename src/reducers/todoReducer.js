const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    completed: false
                }
            ];
        default:
            return state;
    }
};

export default todoReducer;