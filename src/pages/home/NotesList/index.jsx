import './style.css';
import NotesCard from './NotesCard';

const NotesList = () => {
    const Notes = [
        "Biology", "Physiology","Pathology","Anatomy","Physiology"
    ]

    return (
        <>
            <div className="container home_notes_container d-flex flex-wrap justify-content-evenly">
                {Notes.map(Note =>(
                    <NotesCard note={Note}/>
                ))}
            </div>
            
        </>
    )
};

export default NotesList;