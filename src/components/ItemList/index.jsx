import './style.css';

import ItemCard from './Item';

const ItemList = ({ data }) => {
    return (
        <>
            <div className="container home_notes_container d-flex flex-wrap justify-content-evenly ">
                {data.map((item, i) => (
                    <ItemCard key={i} data={item} />
                ))}
            </div>
        </>
    )
};

export default ItemList;