import React from 'react';
import './style.css';


const ItemCard = (props) => {
    return (
        <>
            <div className="card notes-card m-3 position-relative" style={{ width: "8rem" }}>
                <img src={process.env.PUBLIC_URL + `./assets/${props.data.type}-image.png`} className="card-img-top p-2 pb-0" alt={props.data.name} />
                <div className="card-body py-1 px-0">
                    <p className="card-desc card-text text-center mx-1 my-0">{props.data.name}</p>
                    {(props.data.owner) ? (<p className="card-desc card-text text-center mx-1" style={{ fontSize: '0.6rem' }}>{props.data.owner}</p>) : (<></>)}
                </div>
                <div className="itemClickOverlay w-100 h-100 position-absolute bottom-0 start-0" onTouchStart={props.onTouchStart} onTouchEnd={props.onTouchEnd}></div>
            </div>
            {(props.data.type)==='note' ? (
                <div className="add-notes position-fixed fs-1 d-flex justify-content-end">
                <i onClick="." class="logout-icon fa-solid fa-plus bg-yellow rounded-circle p-3 "></i>
                </div>
            ): null}
        </>
    );
}

export default ItemCard;