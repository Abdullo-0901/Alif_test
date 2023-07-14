import React from "react";
import { useDispatch } from "react-redux";
import {
  handleOpenCloseModals,
  setAdres,
  setAge,
  setCity,
  setEmail,
  setJob,
  setName,
  setPhone,
  setSurname
} from "../reducers/todos";
import Dialog from "./Dialog";
import { useState } from "react";
import { postTodos } from "../api/todos";
const AddUser = (props) => {
  const dispatch = useDispatch();
  const { name, surname, age, email, phone, job, city, adress } = props;
  const [selectedImage, setSelectedImage] = useState(null);
  const handleFileInputChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  return (
    <div>
      {props.addModal && (
        <Dialog
          title="addModal"
          handleClose={() =>
            dispatch(handleOpenCloseModals({ name: "addModal", value: false }))
          }
          onClick={
            () => {
              (name == "", surname == "")
                ? alert("Please fill the input")
                : dispatch(
                    postTodos({
                      img: selectedImage,
                      name: name,
                      age: age,
                      phone: phone,
                      email: email,
                      job: job,
                      adress: adress,
                      city: city,
                      surname: surname,
                    })
                  );
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
    </div>
  );
};

export default AddUser;
