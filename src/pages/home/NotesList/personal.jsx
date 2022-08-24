import './style.css';
import NotesCard from './NotesCard';
import Navbar from '../navbar';
import Footer from '../footer';

const PersonalNotes = () => {
    const Notes = [
        { name: "Biology", id: 1, desc: null },
        { name: "Physiology", id: 2, desc: null },
        { name: "Pathology", id: 3, desc: null },
        { name: "Anatomy", id: 4, desc: null },
        { name: "Physiology", id: 5, desc: null }
    ]

    return (
        <>
            <Navbar heading1='personal' heading2='private' />
            <div className="container home_notes_container d-flex flex-wrap justify-content-evenly ">
                {Notes.map(Note => (
                    <NotesCard key={Note.id} note={Note} />
                ))}
            </div>
            <Footer />

        </>
    )
};

export default PersonalNotes;