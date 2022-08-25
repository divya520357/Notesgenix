import './style.css';

import ItemCard from './Item';
import { useRef, useState } from 'react';

const ItemList = ({ data }) => {
    const overlay = useRef(null);
    const overlayBg = useRef(null);
    const [noteName, SetNoteName] = useState(null);
    let timer;

    const TouchStart = (notesName) => {
        if (!timer) {
            // A timeout function for adding long touch functionality
            timer = setTimeout(() => {
                SetNoteName(notesName);
                overlay.current.style.bottom = '0';
                overlay.current.style.transition = 'all ease-out 0.6s';
                overlayBg.current.style.transition = 'all ease-out 2s';
                overlayBg.current.style.zIndex = '1';
            }, 250)
        }
    };

    const TouchEnd = () => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    const closeOverlay = () => {
        overlay.current.style.bottom = '-100%';
        overlay.current.style.transition = 'all ease-in 0.6s'
        overlayBg.current.style.transition = 'all ease-in 0.1s'
        overlayBg.current.style.zIndex = '-1';
    }

    return (
        <>
            <div className="container home_notes_container position-relative d-flex flex-wrap justify-content-evenly">
                {data.map((item, i) => (
                    <ItemCard key={i} data={item}
                        onTouchStart={TouchStart}
                        onTouchEnd={TouchEnd}
                    />
                ))}
            </div>

            <div ref={overlayBg} onClick={closeOverlay} className="card-overlay-bg position-fixed w-100 h-100 bg-red"></div>
            <div ref={overlay} className="card-overlay bg-yellow position-fixed w-100 h-50 d-flex flex-column">
                <div className="w-75 d-flex justify-content-start mt-3 mb-4 ms-3 align-items-center">
                    <i onClick={closeOverlay} className="fa-solid fa-angle-left fa-lg pe-3 ps-1"></i>
                    <span className="text-start text-gray fs-3">{noteName}</span>
                </div>

                <div className="w-75 d-flex justify-content-start my-2 ms-3 align-items-center">
                    <i className="fa-solid fa-users fa-lg pe-3"></i>
                    <span className="text-start fs-3">Share</span>
                </div>

                <div className="w-75 d-flex justify-content-start my-2 ms-3 align-items-center">
                    <i className="fa-solid fa-pen-to-square fa-lg pe-3"></i>
                    <span className="text-star fs-3">Add new Pages</span>
                </div>

                <div className="w-75 d-flex justify-content-start my-2 ms-3 align-items-center">
                    <i className="fa-solid fa-cloud-arrow-down fa-lg pe-3"></i>
                    <span className="text-start fs-3">Download</span>
                </div>

                <div className="w-75 d-flex justify-content-start my-2 ms-3 align-items-center">
                    <i className="fa-solid fa-ban fa-lg pe-3"></i>
                    <span className="text-start fs-3">Remove</span>
                </div>
            </div>


        </>
    )
};

export default ItemList;