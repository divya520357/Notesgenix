import React from 'react';
import notes from "./assets/note-image.png";

const NotesCard = (props) => {
    return (
        <div class="card notes-card m-3" style={{ width: "8rem" }}>
            <img src={notes} class="card-img-top p-2 pb-0" alt="notes" />
            <div class="card-body py-1 px-0">
                <p class="card-desc card-text text-center mx-1">{props.note}</p>
            </div>
        </div>
    );
}

export default NotesCard;