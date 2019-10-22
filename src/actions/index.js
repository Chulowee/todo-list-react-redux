export const addTodo = title => ({
    type: 'ADD_TODO',
    id: generateId(),
    title: title
});

const generateId = () => {
    return new Date().getTime() + Math.random();
};