import React from "react";
import {
  handleOpenCloseModals,
  setEditAdres,
  setEditAge,
  setEditCity,
  setEditEmail,
  setEditJob,
  setEditName,
  setEditPhone,
  setEditSurname,
} from "../reducers/todos";
import { editTodo } from "../api/todos";
import Dialog from "./Dialog";
import { useDispatch, useSelector } from "react-redux";

const Edit = ({editUser}) => {
  const dispatch = useDispatch();
  const editName = useSelector(({ todos }) => todos.editName);
  const editSurname = useSelector(({ todos }) => todos.editSurname);
  const editAge = useSelector(({ todos }) => todos.editAge);
  const editImg = useSelector(({ todos }) => todos.editImg);
  const editPhone = useSelector(({ todos }) => todos.editPhone);
  const editJob = useSelector(({ todos }) => todos.editJob);
  const editCity = useSelector(({ todos }) => todos.editCity);
  const editAdrecc = useSelector(({ todos }) => todos.editAdrecc);
  const editEmail = useSelector(({ todos }) => todos.editEmail);
  const editModal = useSelector(({ todos }) => todos.editModal);
  const idx = useSelector(({ todos }) => todos.idx);
  const handleFileInputEdit = (event) => {
    const file = event.target.files[0];
    setEditFromUser(true);
  };
  return (
    <div>
      {editModal && (
        <Dialog
          title="EditModal"
          handleClose={() =>
            dispatch(handleOpenCloseModals({ name: "editModal", value: false }))
          }
          onClick={() => {
            let obj = {
              img: editImg,
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
                type="file"
                accept="image/*"
                onChange={handleFileInputEdit}
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
    </div>
  );
};

export default Edit;
