import React, { useRef } from 'react';
import './style.css';


const ItemCard = (props) => {
    const overlay = useRef(null);
    const addNotes = useRef(null);

    const handleAddNotes = (e) => {
        overlay.current.style.bottom = '0';
        overlay.current.style.transition = 'all ease-out 0.6s'
        addNotes.current.style.display = 'none'
    };

    const closeOverlay = () => {
        overlay.current.style.bottom = '-100%';
        overlay.current.style.transition = 'all ease-in 0.6s'
    }
    return (
        <>
            <div className="card notes-card m-3 position-relative" style={{ width: "8rem" }}>
                <img src={process.env.PUBLIC_URL + `./assets/${props.data.type}-image.png`} className="card-img-top p-2 pb-0" alt={props.data.name} />
                <div className="card-body py-1 px-0">
                    <p className="card-desc card-text text-center mx-1 my-0">{props.data.name}</p>
                    {(props.data.owner) ? (<p className="card-desc card-text text-center mx-1" style={{ fontSize: '0.6rem' }}>{props.data.owner}</p>) : (<></>)}
                </div>
                <div className="itemClickOverlay w-100 h-100 position-absolute bottom-0 start-0" onTouchStart={() => { props.onTouchStart(props.data.name + " " + props.data.type) }} onTouchEnd={props.onTouchEnd}></div>
            </div>
            {(props.data.type) === 'note' ? (
                <div ref={addNotes} className="add-notes position-fixed fs-1 d-flex justify-content-end"  >
                <i onClick={handleAddNotes} class="add-icon fa-solid fa-plus bg-yellow rounded-circle p-3 "></i>
                </div>
            ) : null}


            <div ref={overlay} className="card-overlay bg-yellow position-fixed w-100  d-flex align-items-center">
                <div className="d-flex justify-content-start align-items-start ps-3">
                    <i onClick={closeOverlay} className="fa-solid fa-angle-left fa-lg"></i>
                </div>

                <div className="w-75 d-flex flex-column justify-item-scenter my-2  align-items-center">
                    <i className="fa-solid fa-upload fa-lg p-2 m-1"></i>
                    <span className="text-start fs-3">Scan</span>
                </div>

                <div className="w-75 d-flex flex-column justify-item-scenter my-2  align-items-center">
                    <i className="fa-solid fa-camera fa-lg p-2 m-1"></i>
                    <span className="text-start fs-3">Upload</span>
                </div>
            </div>
        </>
    );
}

export default ItemCard;