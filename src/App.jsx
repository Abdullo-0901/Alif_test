import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { deleteTodos, editTodo, getTodos, postTodos } from "./api/todos";
import Dialog from "./components/Dialog";
import Table from "./components/Table";
import { singleFile } from "./api/file";
import {
  handleOpenCloseModals,
  setAdres,
  setAge,
  setCity,
  setEditAdres,
  setEditAge,
  setEditCity,
  setEditEmail,
  setEditJob,
  setEditName,
  setEditPhone,
  setEditSurname,
  setEmail,
  setIdx,
  setJob,
  setName,
  setPhone,
  setQ,
  setSurname,
} from "./reducers/todos";
function App() {
  const dispatch = useDispatch();
  const todos = useSelector(({ todos }) => todos.list);
  const addModal = useSelector(({ todos }) => todos.addModal);
  const editModal = useSelector(({ todos }) => todos.editModal);
  const delModal = useSelector(({ todos }) => todos.delModal);
  const infoModal = useSelector(({ todos }) => todos.infoModal);
  const name = useSelector(({ todos }) => todos.name);
  const surname = useSelector(({ todos }) => todos.surname);
  const age = useSelector(({ todos }) => todos.age);
  const email = useSelector(({ todos }) => todos.email);
  const idx = useSelector(({ todos }) => todos.idx);
  const phone = useSelector(({ todos }) => todos.phone);
  const job = useSelector(({ todos }) => todos.job);
  const city = useSelector(({ todos }) => todos.city);
  const adress = useSelector(({ todos }) => todos.adress);
  const loading = useSelector(({ todos }) => todos.loading);
  const editName = useSelector(({ todos }) => todos.editName);
  const editSurname = useSelector(({ todos }) => todos.editSurname);
  const editAge = useSelector(({ todos }) => todos.editAge);
  const q = useSelector(({ todos }) => todos.q);
  const editEmail = useSelector(({ todos }) => todos.editEmail);

  const editPhone = useSelector(({ todos }) => todos.editPhone);
  const editJob = useSelector(({ todos }) => todos.editJob);
  const editCity = useSelector(({ todos }) => todos.editCity);
  const editAdrecc = useSelector(({ todos }) => todos.editAdrecc);
  const [items, setItems] = useState([]);
  const [del, setDel] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  if (loading) return <div>Loading...</div>;
  function editUser(el) {
    dispatch(handleOpenCloseModals({ name: "editModal", value: true }));
    dispatch(setEditName(el.name));
    dispatch(setEditSurname(el.surname));
    dispatch(setEditEmail(el.email));
    dispatch(setEditAge(el.age));
    dispatch(setEditCity(el.city));
    dispatch(setEditAdres(el.adress));
    dispatch(setEditJob(el.job));
    dispatch(setEditPhone(el.phone));
    dispatch(setIdx(el.id));
  }
  async function addUzer(values) {
    let category = { ...values };

    dispatch(postTodos(category));
  }



  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  
  return (
    <div>
      <Table
        data={todos}
        onEdit={(el) => editUser(el)}
        onInfo={(el) => {
          setItems({ ...el });
          dispatch(handleOpenCloseModals({ name: "infoModal", value: true }));
        }}
        onDel={(id) => {
          setDel(id);
          dispatch(handleOpenCloseModals({ name: "delModal", value: true }));
        }}
        q={q}
      />
      {
        <div className="flex gap-5 items-center sm:flex-wrap justify-center">
          <button
            className="w-[250px] my-7"
            onClick={() => {
              dispatch(
                handleOpenCloseModals({ name: "addModal", value: true })
              );
              dispatch(setName(""));
              dispatch(setAdres(""));
              dispatch(setAge(null));
              dispatch(setCity(""));
              dispatch(setEmail(""));
              dispatch(setJob(""));
              dispatch(setPhone(null));
              dispatch(setSurname(""));
            }}
          >
            Add
          </button>
          <input
            required
            type="text"
            value={q}
            onChange={(e) => dispatch(setQ(e.target.value))}
            className="border-2 rounded-[4px] border-black outline-none p-[6px_15px]"
            placeholder="Search user"
          />
        </div>
      }
      {addModal && (
        <Dialog
          title="addModal"
          handleClose={() =>
            dispatch(handleOpenCloseModals({ name: "addModal", value: false }))
          }
          onClick={
            () => {
              (name == "", surname == "")
                ? alert("Please fill the input")
                : addUzer({
                    img: selectedImage,
                    name: name,
                    age: age,
                    phone: phone,
                    email: email,
                    job: job,
                    adress: adress,
                    city: city,
                    surname: surname,
                  });
            }
            // dispatch(
            //   postTodos()
            // )
          }
        >
          {
            <div className="flex flex-col">
              <label htmlFor="email">Img</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
              />
              <label htmlFor="email">Name</label>
              <input
                required
                type="text"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={name}
                onChange={(e) => {
                  dispatch(setName(e.target.value));
                }}
              />

              <label htmlFor="surname">Surname</label>
              <input
                required
                type="text"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={surname}
                onChange={(e) => {
                  dispatch(setSurname(e.target.value));
                }}
              />
              <label htmlFor="email">Email</label>
              <input
                required
                type="text"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={email}
                onChange={(e) => {
                  dispatch(setEmail(e.target.value));
                }}
              />
              <label htmlFor="age">Age</label>
              <input
                required
                type="number"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={age}
                onChange={(e) => {
                  dispatch(setAge(e.target.value));
                }}
              />
              <label htmlFor="city">City</label>
              <input
                required
                type="text"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={city}
                onChange={(e) => {
                  dispatch(setCity(e.target.value));
                }}
              />
              <label htmlFor="city">Adress</label>
              <input
                required
                type="text"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={adress}
                onChange={(e) => {
                  dispatch(setAdres(e.target.value));
                }}
              />
              <label htmlFor="email">Phone</label>
              <input
                required
                type="number"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={phone}
                onChange={(e) => {
                  dispatch(setPhone(e.target.value));
                }}
              />
              <label htmlFor="job">Job</label>
              <input
                required
                type="text"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={job}
                onChange={(e) => {
                  dispatch(setJob(e.target.value));
                }}
              />
            </div>
          }
        </Dialog>
      )}
      {editModal && (
        <Dialog
          title="EditModal"
          handleClose={() =>
            dispatch(handleOpenCloseModals({ name: "editModal", value: false }))
          }
          onClick={() => {
            let obj = {

              name: editName,
              surname: editSurname,
              email: editEmail,
              phone: editPhone,
              age: editAge,
              job: editJob,
              city: editCity,
              adress: editAdrecc,
            };
            dispatch(
              editTodo({
                idx,
                obj,
              })
            );
            dispatch(
              handleOpenCloseModals({ name: "editModal", value: false })
            );
          }}
        >
          {
            <div className="flex flex-col">
              <label htmlFor="email">Img</label>
              <input
                required
                type="file"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
              />
              <label htmlFor="email">Name</label>
              <input
                required
                type="text"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={editName}
                name="name"
                onChange={(e) => {
                  dispatch(setEditName(e.target.value));
                }}
              />
              <label htmlFor="surname">Surname</label>
              <input
                required
                type="text"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={editSurname}
                name="surname"
                onChange={(e) => {
                  dispatch(setEditSurname(e.target.value));
                }}
              />
              <label htmlFor="email">Email</label>
              <input
                required
                type="text"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={editEmail}
                name="email"
                onChange={(e) => {
                  dispatch(setEditEmail(e.target.value));
                }}
              />
              <label htmlFor="age">Age</label>
              <input
                required
                type="number"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={editAge}
                name="age"
                onChange={(e) => {
                  dispatch(setEditAge(e.target.value));
                }}
              />
              <label htmlFor="city">City</label>
              <input
                required
                type="text"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={editCity}
                name="city"
                onChange={(e) => {
                  dispatch(setEditCity(e.target.value));
                }}
              />
              <label htmlFor="city">Adress</label>
              <input
                required
                type="text"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={editAdrecc}
                name="adress"
                onChange={(e) => {
                  dispatch(setEditAdres(e.target.value));
                }}
              />
              <label htmlFor="email">Phone</label>
              <input
                required
                type="number"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={editPhone}
                name="phone"
                onChange={(e) => {
                  dispatch(setEditPhone(e.target.value));
                }}
              />
              <label htmlFor="job">Job</label>
              <input
                required
                type="text"
                className="border inline-block border-black w-[300px] p-[2px_5px]"
                value={editJob}
                name="job"
                onChange={(e) => {
                  dispatch(setEditJob(e.target.value));
                }}
              />
            </div>
          }
        </Dialog>
      )}
      {infoModal && (
        <Dialog
          title="infoModal"
          handleClose={() =>
            dispatch(handleOpenCloseModals({ name: "infoModal", value: false }))
          }
          onClick={() =>
            dispatch(handleOpenCloseModals({ name: "infoModal", value: false }))
          }
        >
          <div className="flex flex-col items-center">
            {Object.keys(items)
              .slice(1)
              .map((elem) => {
                if (elem === "img") {
                  return <img src={items[elem]} alt="" className="" />;
                }
                if (elem === "id") {
                  return <></>;
                }
                return (
                  <div className="flex flex-col gap-y-2">
                    <div className="flex gap-4 justify-start w-[216px]">
                      <h2 className="text-start font-bold text-black text-[18px]">
                        {elem}:
                      </h2>
                      <h2>{items[elem]}</h2>
                    </div>
                  </div>
                );
              })}
          </div>
        </Dialog>
      )}
      {delModal && (
        <Dialog
          title="Delete Modal"
          handleClose={() =>
            dispatch(handleOpenCloseModals({ name: "delModal", value: false }))
          }
          onClick={() => {
            dispatch(deleteTodos(del));
            dispatch(handleOpenCloseModals({ name: "delModal", value: false }));
          }}
        >
          {<h2>Are you sure you want to delete this student?</h2>}
        </Dialog>
      )}
    </div>
  );
}

export default App;
