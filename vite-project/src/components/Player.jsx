import React, { useEffect, useRef } from 'react'

const Player = ({ setSelectedSong, selectedSong, isPlaying, setIsPlaying, songs }) => {

  let audioRef = useRef(null)

  //play pause below

  let handlePlayer = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  useEffect(() => {                                         // used because whenever selectedSong changes so it will play new song
    if (audioRef.current && selectedSong) {
      audioRef.current.load()
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [selectedSong])



  // prev,next songs below

  let currentIndex = songs.findIndex((song) =>
    song.id === selectedSong?.id
  )

  let handleNext = () => {
    if (currentIndex === -1) return
    const nextIndex = (currentIndex + 1) % songs.length
    setSelectedSong(songs[nextIndex])
  }

  let handlePrev = () => {
    if (currentIndex === -1) return
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length
    setSelectedSong(songs[prevIndex])
  }

  return (
    <div className='h-[18%] w-full bg-green-500 flex justify-around items-center'>
      <div>{selectedSong ? selectedSong.title : <h1>song</h1>}</div>

      <audio ref={audioRef} src={selectedSong?.songUrl}></audio>

      <div className='flex justify-center items-center gap-10 bg-black text-white p-2 w-100'>
        <button onClick={handlePrev} className='bg-white text-black rounded-full p-2 cursor-pointer'>back</button>
        <button
          onClick={handlePlayer}
          className='bg-white text-black rounded-full p-2 cursor-pointer'>{isPlaying ? "pause" : "play"}</button>
        <button onClick={handleNext} className='bg-white text-black rounded-full p-2 cursor-pointer'>next</button>
      </div>
    </div>
  )
}

export default Player