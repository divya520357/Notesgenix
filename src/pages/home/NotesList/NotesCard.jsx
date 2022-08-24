import React from 'react';
import notes from "./assets/note-image.png";

const NotesCard = (props) => {

    const handleDesc=()=>{if(props.notes.desc != null){
      return  (
        <p className="card-desc card-text text-center mx-1">{props.note.desc}</p>
        )
    }
    else{
        return null
    }
    }
    return ( 
        <div className="card notes-card m-3" style={{width: "8rem"}}>
            <img src={notes} className="card-img-top p-2 pb-0" alt="notes" />
            <div className="card-body py-1 px-0">
             <p className="card-desc card-text text-center mx-1">{props.note.name}{handleDesc}</p>
                
            </div>
         </div>
    );
}

export default NotesCard;