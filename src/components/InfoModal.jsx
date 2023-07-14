import React from 'react'
import { handleOpenCloseModals } from '../reducers/todos';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from './Dialog';

const InfoModal = (props) => {
    const {items,infoModal}= props
    const dispatch = useDispatch()
  return (
    <div>
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
    </div>
  )
}

export default InfoModal