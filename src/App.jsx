import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { deleteTodos, getTodos } from "./api/todos";
import AddUser from "./components/AddUser";
import Dialog from "./components/Dialog";
import Edit from "./components/Edit";
import Table from "./components/Table";
import {
  handleOpenCloseModals,
  setAdres,
  setAge,
  setCity,
  setEditAdres,
  setEditAge,
  setEditCity,
  setEditEmail,
  setEditImg,
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
  const q = useSelector(({ todos }) => todos.q);
  const [items, setItems] = useState([]);
  const [del, setDel] = useState(null);
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
    dispatch(setEditImg(el.img));
    dispatch(setIdx(el.id));
  }
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  if (loading) return <div>Loading...</div>;
 
 
  const handleFileInputEdit = (event) => {
    const file = event.target.files[0];
    setEditFromUser(true);
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
   <AddUser addModal ={addModal} name={name} surname={surname}age={age}email={email}phone={phone}job={job}city={city} adress={adress} />
      
     <Edit editUser={editUser} />
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
