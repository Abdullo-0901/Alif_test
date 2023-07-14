import { createSlice } from "@reduxjs/toolkit";
import { deleteTodos, getTodos,postTodos } from "../api/todos";

const setLoading = (state) => {
  state.loading = true;
};

const setError = (state) => {
  state.loading = false;
};

export const slice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    loading: false,
    addModal: false,
    editModal: false,
    delModal: false,
    infoModal: false,
    img: "",
    name: "",
    age: null,
    phone: null,
    email: "",
    job: "",
    adress: "",
    city: "",
    surname: "",
    editName: "",
    editSurname: "",
    editEmail: "",
    editPhone: null,
    editAge: null,
    editJob: "",
    editCity: "",
    editAdrecc: "",
    idx :null,
    q:""
  },
  reducers: {
    handleOpenCloseModals(state, action) {
      const { name, value, id } = action.payload;

      if (id) {
        state.idx = id;
      }
      state[name] = value;
    },

    setName(state, action) {
      state.name = action.payload;
    },
    setSurname(state, action) {
      state.surname = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPhone(state, action) {
      console.log(state.phone);
      state.phone = action.payload;
    },
    setJob(state, action) {
      state.job = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
    },
    setAdres(state, action) {
      state.adress = action.payload;
    },
    setEditName(state, action) {
      state.editName = action.payload;
    },
    setEditSurname(state, action) {
      state.editSurname = action.payload;
    },
    setEditAge(state, action) {
      state.editAge = action.payload;
    },
    setIdx(state,action){
      state.idx = action.payload
    },
    setEditEmail(state, action) {
      console.log(action.payload);
      state.editEmail = action.payload;
    },
    setEditPhone(state, action) {
      state.editPhone = action.payload;
    },
    setEditJob(state, action) {
      state.editJob = action.payload;
    },
    setEditCity(state, action) {
      state.editCity = action.payload;
    },
    setEditAdres(state, action) {
      state.editAdrecc = action.payload;
    },
    setQ(state,action){
      state.q = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, setLoading);
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(getTodos.rejected, setError);
    builder.addCase(postTodos.pending, setLoading);
    builder.addCase(postTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.addModal = false;
      state.editModal = false
      //  state.addModal(false)
    });
    builder.addCase(postTodos.rejected, setError);
    builder.addCase(deleteTodos.pending, setLoading);
    builder.addCase(deleteTodos.fulfilled, (state) => {
      state.loading = false;
      state.editModal = false
    });
    builder.addCase(deleteTodos.rejected, setError);
  },
});

export const {
  addTodo,
  deleteTodo,
  completedTodo,
  handleChangeUser,
  handleOpenCloseModals,
  setName,
  setAdres,
  setQ,
  setAge,
  setCity,
  setEmail,
  setJob,
  setIdx,
  setPhone,
  setSurname,
  setEditName,
  setEditAdres,
  setEditAge,
  setEditCity,
  setEditEmail,
  setEditJob,
  setEditPhone,
  setEditSurname,
} = slice.actions;

export default slice.reducer;
