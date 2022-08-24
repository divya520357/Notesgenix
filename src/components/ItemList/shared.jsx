import './style.css';
import NotesCard from './NotesCard';
import Footer from "../footer";
import Navbar from "../navbar";


const SharedList = (props) => {
    const Notes = [
        {name:"Biology", id: 1,desc:'divya520'},
        {name:"Physiology", id:2,desc:'luck01'},
        {name:"Pathology", id:3,desc:'harshitaGupta'},
        {name:"Anatomy",id:4,desc:'berry76'},
        {name:"Physiology", id:5 ,desc:'apple29'}
    ]

    return (
        <>
            <Navbar />
                <div className="container home_notes_container d-flex flex-wrap justify-content-evenly">
                    {Notes.map(Note =>(
                        <NotesCard key={Note.id} note={Note}/>
                    ))}
                </div>
            <Footer />
            
        </>
    )
}
 
export default SharedList;