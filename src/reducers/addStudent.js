// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./App.css";
// import { getTodos, postTodos } from "./api/todos";
// import Dialog from "./components/Dialog";
// import Table from "./components/Table";
// import {
//   handleOpenCloseModals,
//   setAdres,
//   setAge,
//   setCity,
//   setEditAdres,
//   setEditAge,
//   setEditCity,
//   setEditEmail,
//   setEditJob,
//   setEditName,
//   setEditPhone,
//   setEditSurname,
//   setEmail,
//   setJob,
//   setName,
//   setPhone,
//   setSurname
// } from "./reducers/todos";
// function App() {
//   const dispatch = useDispatch();
//   const todos = useSelector(({ todos }) => todos.list);
//   const addModal = useSelector(({ todos }) => todos.addModal);
//   const editModal = useSelector(({ todos }) => todos.editModal);
//   // const todo = useSelector(({ todos }) => todos.todo);
//   const addName = useSelector(({ todos }) => todos.addName);
//   const addSurname = useSelector(({ todos }) => todos.addSurname);
//   const addAge = useSelector(({ todos }) => todos.addAge);
//   const email = useSelector(({ todos }) => todos.email);

//   const addPhone = useSelector(({ todos }) => todos.addPhone);
//   const addJob = useSelector(({ todos }) => todos.addJob);
//   const addCity = useSelector(({ todos }) => todos.addCity);
//   const addAdrecc = useSelector(({ todos }) => todos.addAdrecc);
//   const loading = useSelector(({ todos }) => todos.loading);
//   const editName = useSelector(({ todos }) => todos.editName);
//   const editSurname = useSelector(({ todos }) => todos.editSurname);
//   const editAge = useSelector(({ todos }) => todos.editAge);
//   const editEmail = useSelector(({ todos }) => todos.editEmail);

//   const editPhone = useSelector(({ todos }) => todos.editPhone);
//   const editJob = useSelector(({ todos }) => todos.editJob);
//   const editCity = useSelector(({ todos }) => todos.editCity);
//   const editAdrecc = useSelector(({ todos }) => todos.editAdrecc);

//   useEffect(() => {
//     dispatch(getTodos());
//   }, [dispatch]);
//   if (loading) return <div>Loading...</div>;
//   return (
//     <div>
//       <Table
//         haeders={[
//           "id",
//           "img",
//           "name",
//           "age",
//           "phone",
//           "email",
//           "job",
//           "address",
//           "action",
//         ]}
//         data={todos}
//         onEdit={() =>
//           dispatch(handleOpenCloseModals({ name: "editModal", value: true }))
//         }
//       />
//       <button
//         onClick={() =>
//           dispatch(handleOpenCloseModals({ name: "addModal", value: true }))
//         }
//       >
//         Add
//       </button>
//       {addModal && (
//         <Dialog
//           title="addModal"
//           handleClose={() =>
//             dispatch(handleOpenCloseModals({ name: "addModal", value: false }))
//           }
//           onClick={() => {
//             dispatch(
//               postTodos({
//                 name: name,
//                 surname: surname,
//                 email: email,
//                 phone: phone,
//                 age: age,
//                 job: job,
//                 city: city,
//                 adrecc: adrecc,
//               })
//             ),
//               dispatch(setEditName(name));
//             dispatch(setEditSurname(surname));
//             dispatch(setEditEmail(email));
//             dispatch(setEditAge(age));
//             dispatch(setEditCity(city));
//             dispatch(setEditAdres(adrecc));
//             dispatch(setEditJob(job));
//             dispatch(setEditPhone(phone));
//           }}
//         >
//           {
//             <div className="flex flex-col">
//               <label htmlFor="email">Img</label>
//               <input
//                 type="file"
//                 className="border inline-block border-black w-[300px]"
//               />
//               <label htmlFor="email">Name</label>
//               <input
//                 type="text"
//                 className="border inline-block border-black w-[300px]"
//                 value={name}
//                 onChange={(e) => {
//                   dispatch(setName(e.target.value));
//                 }}
//               />

//               <label htmlFor="surname">Surname</label>
//               <input
//                 type="text"
//                 className="border inline-block border-black w-[300px]"
//                 value={surname}
//                 onChange={(e) => {
//                   dispatch(setSurname(e.target.value));
//                 }}
//               />
//               <label htmlFor="email">Email</label>
//               <input
//                 type="text"
//                 className="border inline-block border-black w-[300px]"
//                 value={email}
//                 onChange={(e) => {
//                   dispatch(setEmail(e.target.value));
//                 }}
//               />
//               <label htmlFor="age">Age</label>
//               <input
//                 type="number"
//                 className="border inline-block border-black w-[300px]"
//                 value={age}
//                 onChange={(e) => {
//                   dispatch(setAge(e.target.value));
//                 }}
//               />
//               <label htmlFor="city">City</label>
//               <input
//                 type="text"
//                 className="border inline-block border-black w-[300px]"
//                 value={city}
//                 onChange={(e) => {
//                   dispatch(setCity(e.target.value));
//                 }}
//               />
//               <label htmlFor="city">Adress</label>
//               <input
//                 type="text"
//                 className="border inline-block border-black w-[300px]"
//                 value={adrecc}
//                 onChange={(e) => {
//                   dispatch(setAdres(e.target.value));
//                 }}
//               />
//               <label htmlFor="email">Phone</label>
//               <input
//                 type="number"
//                 className="border inline-block border-black w-[300px]"
//                 value={phone}
//                 onChange={(e) => {
//                   dispatch(setPhone(e.target.value));
//                 }}
//               />
//               <label htmlFor="job">Job</label>
//               <input
//                 type="text"
//                 className="border inline-block border-black w-[300px]"
//                 value={job}
//                 onChange={(e) => {
//                   dispatch(setJob(e.target.value));
//                 }}
//               />
//             </div>
//           }
//         </Dialog>
//       )}
//       {editModal && (
//         <Dialog
//           title="addModal"
//           handleClose={() =>
//             dispatch(handleOpenCloseModals({ name: "addModal", value: false }))
//           }
//           onClick={() =>
//             dispatch(
//               postTodos({
//                 name: name,
//                 surname: surname,
//                 email: email,
//                 phone: phone,
//                 age: age,
//                 job: job,
//                 city: city,
//                 adrecc: adrecc,
//               })
//             )
//           }
//         >
//           {
//             <div className="flex flex-col">
//               <label htmlFor="email">Img</label>
//               <input
//                 type="file"
//                 className="border inline-block border-black w-[300px]"
//               />
//               <label htmlFor="email">Name</label>
//               <input
//                 type="text"
//                 className="border inline-block border-black w-[300px]"
//                 value={editName}
//                 onChange={(e) => {
//                   dispatch(setEditName(e.target.value));
//                 }}
//               />
//               <label htmlFor="surname">Surname</label>
//               <input
//                 type="text"
//                 className="border inline-block border-black w-[300px]"
//                 value={editSurname}
//                 onChange={(e) => {
//                   dispatch(setEditSurname(e.target.value));
//                 }}
//               />
//               <label htmlFor="email">Email</label>
//               <input
//                 type="text"
//                 className="border inline-block border-black w-[300px]"
//                 value={email}
//                 onChange={(e) => {
//                   dispatch(setEditEmail(e.target.value));
//                 }}
//               />
//               <label htmlFor="age">Age</label>
//               <input
//                 type="number"
//                 className="border inline-block border-black w-[300px]"
//                 value={age}
//                 onChange={(e) => {
//                   dispatch(setEditAge(e.target.value));
//                 }}
//               />
//               <label htmlFor="city">City</label>
//               <input
//                 type="text"
//                 className="border inline-block border-black w-[300px]"
//                 value={city}
//                 onChange={(e) => {
//                   dispatch(setEditCity(e.target.value));
//                 }}
//               />
//               <label htmlFor="city">Adress</label>
//               <input
//                 type="text"
//                 className="border inline-block border-black w-[300px]"
//                 value={adrecc}
//                 onChange={(e) => {
//                   dispatch(setEditAdres(e.target.value));
//                 }}
//               />
//               <label htmlFor="email">Phone</label>
//               <input
//                 type="number"
//                 className="border inline-block border-black w-[300px]"
//                 value={phone}
//                 onChange={(e) => {
//                   dispatch(setEditPhone(e.target.value));
//                 }}
//               />
//               <label htmlFor="job">Job</label>
//               <input
//                 type="text"
//                 className="border inline-block border-black w-[300px]"
//                 value={job}
//                 onChange={(e) => {
//                   dispatch(setEditJob(e.target.value));
//                 }}
//               />
//             </div>
//           }
//         </Dialog>
//       )}
//     </div>
//   );
// }

// export default App;

// {
//   /* <h1>Multiple</h1>
//       <form onSubmit={addPost}>
//         <input type="file" name="photo" multiple />
//         <input type="text" name="content" />
//         <button>submit</button>
//       </form>
//       <h1>Single</h1>
//       <form onSubmit={addPost1}>
//         <input type="file" name="photo" />
//         <input type="text" name="content" />
//         <button>submit</button>
//       </form> */
// }

// // const addPost = async (e) => {
// //   e.preventDefault();

// //   let files = e.target["photo"].files;
// //   const formData = new FormData();
// //   for (const file of files) {
// //     formData.append("files", file);
// //   }

// //   const response = await fetch("http://localhost:3000/uploads", {
// //     method: "POST",
// //     body: formData,
// //   });
// //   const data = await response.json();
// //   for (let link of data.img) {
// //     if (link.mimetype.includes("image")) {
// //       let img = document.createElement("img");
// //       img.src = "http://localhost:3000/" + link.path;
// //       document.body.appendChild(img);
// //     } else if (link.mimetype.includes("video")) {
// //       let video = document.createElement("video");
// //       video.controls = true;
// //       video.src = "http://localhost:3000/" + link.path;
// //       document.body.appendChild(video);
// //     }
// //   }
// // };
// // const addPost1 = async (e) => {
// //   e.preventDefault();

// //   let file = e.target["photo"].files[0];
// //   const formData = new FormData();
// //   formData.append("file", file);

// //   const response = await fetch("http://localhost:3000/upload", {
// //     method: "POST",
// //     body: formData,
// //   });
// //   const data = await response.json();
// //   console.log(data);
// //   let img = document.createElement("img");
// //   img.src = "http://localhost:3000/" + data.img;
// //   document.body.appendChild(img);
// // };























import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTodos, patchTodos, postTodos,deleteTodos} from "../api/todos";

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
    img: "",
    addName: "",
    addSurname: "",
    addEmail: "",
    addPhone: null,
    addAge: null,
    addJob: "",
    addCity: "",
    addAdrecc: "",
    editName: "",
    editSurname: "",
    editEmail: "",
    editPhone: null,
    editAge: null,
    editJob: "",
    editCity: "",
    editAdrecc: "",
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
      state.addName = action.payload;
    },
    setSurname(state, action) {
      state.addSurname = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
    setEmail(state, action) {
      state.addEmail = action.payload;
    },
    setPhone(state, action) {
      state.addPhone = action.payload;
    },
    setJob(state, action) {
      state.addJob = action.payload;
    },
    setCity(state, action) {
      state.addCity = action.payload;
    },
    setAdres(state, action) {
      state.addAdrecc = action.payload;
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
      state.addModal = false
    //  state.addModal(false)
    });
    builder.addCase(postTodos.rejected, setError);
    builder.addCase(deleteTodos.pending, setLoading);
    builder.addCase(deleteTodos.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteTodos.rejected, setError);
    builder.addCase(patchTodos.pending, setLoading);
    builder.addCase(patchTodos.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(patchTodos.rejected, setError);
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
  setAge,
  setCity,
  setEmail,
  setJob,
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





