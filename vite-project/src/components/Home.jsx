import React from 'react'
import SongCard from './SongCard'

const Home = ({ selectedSong }) => {

  if(!selectedSong){
    return <h1>Select any song to play...</h1>
  }

  return (
    <div className='w-full bg-red-500 p-2 flex flex-col '>
      <SongCard song={selectedSong}/>
    </div>
  )
}

export default Home