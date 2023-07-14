import React from 'react'
import Dialog from './Dialog';
import { handleOpenCloseModals } from '../reducers/todos';
import { useDispatch } from 'react-redux';
import { deleteTodos } from '../api/todos';

const DeleteItem = (props) => {
    const {delModal,del}= props
    const dispatch = useDispatch()
  return (
    <div>
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
  )
}

export default DeleteItem