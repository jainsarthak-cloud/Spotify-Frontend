import React from 'react'

const Navbar = ({ search, setSearch }) => {
  return (
    <div className='h-[12%] w-full bg-red-500 flex justify-around items-center p-2'>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Contact</h1>
      <input
      className='border border-white px-10 py-2 rounded-xl'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder='search any song...' />
    </div>
  )
}

export default Navbar