import React, { useState } from 'react'

export const NewSongForm = ({addSong}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        //prevent refresh of page when button is submittet
        e.preventDefault();
        addSong(title);
        setTitle('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Song name:</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="submit" value="add song"/>
        </form>
    )
}
