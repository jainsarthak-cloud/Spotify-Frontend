import React from 'react'

const SongCard = ({song}) => {
  return (
    <div className='flex gap-1 p-1 bg-white justify-between items-center cursor-pointer rounded-xl'>
        <h1>{song.id}</h1>
        <h1>{song.title}</h1>
        <h1>{song.singer}</h1>
    </div>
  )
}

export default SongCard