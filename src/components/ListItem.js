import React from 'react';

const ListItem = ({song}) => {
    return <li className='song-list'>
        <h3>{song.title.label}</h3>
        <img src={song["im:image"][1].label}></img>

    </li>
};

export default ListItem;

