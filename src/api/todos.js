import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import todos from "../reducers/todos";

let axiosRequest = axios.create({
  baseURL: "http://localhost:3000/",
});
export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  try {
    const { data } = await axiosRequest.get(`students`);
    return data;
  } catch (error) {}
});

export const postTodos = createAsyncThunk(
  "todos/postTodos",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const student = {
        img:obj.img,
        name: obj.name,
        surname: obj.surname,
        age: obj.age,
        phone: obj.phone,
        job: obj.job,
        email: obj.email,
        city: obj.city,
        adress: obj.adress,
      };
      const response = await fetch(`http://localhost:3000/students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
      const data = response.json();
      if (!response.ok) {
        throw new Error("Cant delete task.Server error");
      }
      dispatch(getTodos());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodos = createAsyncThunk(
  "todos/deleteTodos",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`http://localhost:3000/students/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Cant delete task.Server error");
      }
      dispatch(getTodos());
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
export const patchTodos = createAsyncThunk(
  "todos/patchTodos",
  async (id, { dispatch, getState }) => {
    const todo = { ...getState().todos.list.find((elem) => elem.id === id) };
    console.log(todo);
    todo.completed = !todo.completed;
    try {
      const { data } = await axiosRequest.patch(`todos/${id}`, todo);
      dispatch(getTodos());
    } catch (error) {}
  }
);
export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async function ({ idx, obj }, { dispatch }) {
    try {
      const { data } = await axios.put(`http://localhost:3000/students/${idx}`, obj);
      dispatch(getTodos());
      return data;
    } catch (error) {}
  }
);
