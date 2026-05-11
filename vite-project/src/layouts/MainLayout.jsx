import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Player from '../components/Player'
import SideBar from '../components/SideBar'
import Home from '../components/Home'
import songs from '../data/songs.json'

const MainLayout = () => {

    const [selectedSong, setSelectedSong] = useState(null)

    const [isPlaying, setIsPlaying] = useState(false)

    const [search, setSearch] = useState("")

    const [category, setCategory] = useState("All")

    return (
        <div className='h-screen w-full flex flex-col justify-content items-center gap-3 p-2'>
            <Navbar search={search} setSearch={setSearch} />

            <div className='flex gap-5 h-[80%] w-full'>
                <SideBar setSelectedSong={setSelectedSong} songs={songs} search={search} setSearch={setSearch} category={category} setCategory={setCategory} />
                <Home selectedSong={selectedSong} />
            </div>

            <Player selectedSong={selectedSong} setSelectedSong={setSelectedSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs} />
        </div>
    )
}

export default MainLayout