import React from 'react'
import SongCard from './SongCard'

const SideBar = ({ songs, setSelectedSong, search, setSearch, category, setCategory }) => {

  const filteredSong = songs.filter((song) => {
    const matchSearch = song.title.toLowerCase().includes(search.toLowerCase())

    const matchCategory = category === "All" || song.category === category

    return matchSearch && matchCategory
  })

  return (
    <div className='w-[40%] bg-red-500 overflow-auto p-3 flex flex-col gap-2'>

      <h1>CATEGORIES</h1>

      <div className='flex gap-3 items-center justify-between'>
        <button onClick={() => setCategory("All")} className='bg-black text-white rounded-full p-2 cursor-pointer'>All</button>
        <button onClick={() => setCategory("Pop")} className='bg-black text-white rounded-full p-2 cursor-pointer'>Pop</button>
        <button onClick={() => setCategory("rock")} className='bg-black text-white rounded-full p-2 cursor-pointer'>Rock</button>
        <button onClick={() => setCategory("folk")} className='bg-black text-white rounded-full p-2 cursor-pointer'>Folk</button>
      </div>

      <div className='overflow-auto flex flex-col gap-2'>
        {

          (filteredSong.length === 0)
            ? <h1>No song founded</h1>
            : filteredSong.map((song) => (
              <div
                onClick={() => {
                  setSelectedSong(song)
                  
                  setSearch("")
                }}
                key={song.id}
              >
                <SongCard song={song} />
              </div>
            ))

        }
      </div>

    </div>
  )
}

export default SideBar