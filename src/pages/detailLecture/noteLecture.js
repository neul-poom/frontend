// Note.js
import '../css/detailLecture/note.css';


import { useState } from 'react';

function Note(props) {
    const [noteTitle, setNoteTitle] = useState('강의 노트 제목');

    const handleTitleChange = (event) => {
        setNoteTitle(event.target.value);
    };

    return (
        <div className="note-container">
            <input
                type="text"
                className="note-title"
                value={noteTitle}
                onChange={handleTitleChange}
            />
            <textarea className="note-content" placeholder="강의 노트를 입력하세요"></textarea>
        </div>
    )
}

export default Note;