import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import FileDownloadDoneOutlinedIcon from '@mui/icons-material/FileDownloadDoneOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import React from "react";
import { useDispatch } from "react-redux";
import './table.css';

const Table = (props) => {
  const { data, onEdit, onInfo,onDel,q } = props;

  const dispatch = useDispatch();
  return(
    <div className="grid md3:grid-cols-4 sm:grid-cols-1 md:grid-cols-2  gap-5">
       
          {

        q.trim().length > 0 ? (
          data.filter(elem=>{

            if((Object.values(elem).join().toString().toLowerCase().includes(q.toLowerCase()))){
              return elem
            }
        }).
        map(el=>{
          
         return(
          <div class="card">
          <img src={el.img} alt="IMG" style={{width:"100%"}} />
         
          <p class="title" style={{textTransform:"uppercase"}}>{el.name}  {el.surname}</p>
        <div className='flex gap-2'>
          <div onClick={() => onDel(el.id)}>
           <DeleteForeverOutlinedIcon color='error' className='cursor-pointer'  />
          </div>
          <div onClick={() => onEdit(el)}>
         <ModeEditOutlinedIcon className='cursor-pointer'/>
          </div>
         
          <div  onClick={() => onInfo(el)}>
            <FileDownloadDoneOutlinedIcon className='cursor-pointer'/>
          </div>
        </div>

        </div>
         )
        })
        ):data.map(el=>{
          return(
           <div class="card">
           <img src={el.img} alt={el.img} style={{width:"100%"}} />
          
           <p class="title" style={{textTransform:"uppercase"}}>{el.name}  {el.surname}</p>
         <div className='flex gap-2'>
           <div onClick={() => onDel(el.id)}>
            <DeleteForeverOutlinedIcon color='error' className='cursor-pointer'  />
           </div>
           <div onClick={() => onEdit(el)}>
          <ModeEditOutlinedIcon className='cursor-pointer'/>
           </div>
          
           <div  onClick={() => onInfo(el)}>
             <FileDownloadDoneOutlinedIcon className='cursor-pointer'/>
           </div>
         </div>
 
         </div>
          )
         })
          }
         
    </div>
  )
    

};

export default Table;
