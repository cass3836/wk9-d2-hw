import React from 'react';

const SongList = (props) => {
  console.log('vdvfjhvf', props.songs);
  const songList = props.songs
  // .sort((song1, song2) => {
     // return song1.category.attributes['im:id'] - song2.category.attributes['im:id']
  // })
  .map((song) => {
    return (
      <li>{song['im:name'].label}, by {song['im:artist'].label}</li>
    )
  });




  return(
    <ol>
      {songList}
    </ol>
  )
    // return <option value={index} key={index}>{character.name}</option>
  }


export default SongList;
//
// creativity(something arty/making things)
// being responsible
// excellence - 'reach for stars'
// curiosity
// determination - '500 miles'
// enthusiasm - 'happy'
