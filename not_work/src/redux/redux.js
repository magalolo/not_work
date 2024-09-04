import { createReducer, createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('todos/addTodo');
export const removeTodo = createAction('todos/removeTodo');
export const setKey = createAction('todos/setKey');
export const setCorrect = createAction('todos/setCorrect');
export const editText = createAction('todos/editText');

const initialState = {
  todos: [],
};

const todoListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.todos.push({
        completed: false,
        important: false,
        correct: false,
        id: Math.random(),
        text: action.payload.text,
      });
    })
    .addCase(removeTodo, (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    })
    .addCase(setKey, (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    })
    .addCase(setCorrect, (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.correct = !todo.correct;
      }
    })
    .addCase(editText, (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.correct = !todo.correct;
      }
    });
});

export default todoListReducer;
