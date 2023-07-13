import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetTodosQuery,
} from "./api/todos";
import { handleModalOpenClose } from "./reducers/todos";
import Dialog from "./components/Dialog";

import { useState } from "react";
import Table from "./components/Table";
function App() {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState("");
  const { data, error, isLoading } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const [addTodo] = useAddTodoMutation();
  const [completeTodo] = useEditTodoMutation();
  const addModal = useSelector(({ todos }) => todos.addModal);
  const editModal = useSelector(({ todos }) => todos.editModal);
  const delModal = useSelector(({ todos }) => todos.delModal);
  const datas = useSelector(({ todos }) => todos.todo);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: 404 Not Found</div>;

  return (
    <div>
      {/* <input
        type="text"
        className="border"
        value={title}
        onChange={(e) => dispatch(handleChangeTitle(e.target.value))}
      />
      <input
        type="text"
        className="border"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      /> */}
      <button
        onClick={() =>
          dispatch(handleModalOpenClose({ name: "addModal", value: true }))
        }
      >
        add
      </button>

      <Table
        haeders={[
          "id",
          "name",
          "age",
          "phone",
          "email",
          "job",
          "adress",
          "actions",
        ]}
        data={data}
      />
      {/* {data.length > 0
        ? data.map((elem) => {
            return (
              <div key={elem.id}>
                <input
                  type="checkbox"
                  value={elem.completed}
                  onChange={(e) => {
                    const todo = { ...elem };
                    todo.completed = e.target.checked;
                    completeTodo(todo);
                  }}
                />

                {elem.completed ? (
                  <span>
                    <s>{elem.title}</s>
                  </span>
                ) : (
                  <span>{elem.title}</span>
                )}
                <button
                  onClick={() => {
                    deleteTodo(elem.id);
                  }}
                >
                  del
                </button>
              </div>
            );
          })
        : null} */}

      {addModal && (
        <Dialog
          title="addModal"
          handleClose={() =>
            dispatch(handleModalOpenClose({ name: "addModal", value: false }))
          }
        >
{
console.log(  Object.keys(datas))
}

          {/* {Object.keys(todo)
            .slice(1)
            .map((elem) => {
              if (elem === "age" || elem === "phone") {
                return (
                  <div className="flex flex-col">
                    <label htmlFor={elem}>{elem}</label>
                    <input
                      type="number"
                      className="border inline-block border-black w-[300px]"
                      id={elem}
                      value={todo[elem]}
                      onChange={(e) => {
                        dispatch(
                          handleChangeUser({
                            name: elem,
                            value: e.target.value,
                          })
                        );
                      }}
                    />
                  </div>
                );
              }
              return (
                <div className="flex flex-col">
                  <label htmlFor={elem}>{elem}</label>
                  <input
                    type="text"
                    id={elem}
                    value={todo[elem]}
                    className="border inline-block border-black w-[300px]"
                    onChange={(e) => {
                    
                    }}
                  />
                </div>
              );
            })} */}
        </Dialog>
      )}
    </div>
  );
}

export default App;

{
  /* <h1>Multiple</h1>
      <form onSubmit={addPost}>
        <input type="file" name="photo" multiple />
        <input type="text" name="content" />
        <button>submit</button>
      </form>
      <h1>Single</h1>
      <form onSubmit={addPost1}>
        <input type="file" name="photo" />
        <input type="text" name="content" />
        <button>submit</button>
      </form> */
}
