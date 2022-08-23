import './style.css';
import NotesCard from './NotesCard';

const NotesList = () => {
    const Notes = [
        {name:"Biology", id: 1},
        {name:"Physiology", id:2},
        {name:"Pathology", id:3},
        {name:"Anatomy",id:4},
        {name:"Physiology", id:5}
    ]

    return (
        <>
            <div className="container home_notes_container d-flex flex-wrap justify-content-evenly">
                {Notes.map(Note =>(
                    <NotesCard key={Note.id} note={Note.name}/>
                ))}
            </div>
            
        </>
    )
};

export default NotesList;