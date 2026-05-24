import React, { use, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
    const [text, setText] = useState('')
const dispatch = useDispatch()

    const submitHandler =(e)=>{
        e.preventDefault()
    dispatch(setQuery(text))
        
        setText('')
    }

  return (
    <div>
<form onSubmit={(e)=>{
    submitHandler(e)
}} className='flex p-10 gap-5 bg-gray-900 '> 
    <input
    value={text}
    onChange={(e)=>{
        setText(e.target.value);
        
    }}
    required
    className='border-2 px-4 py-2 text-xl w-full rounded outline-none'
    type="text" placeholder='Search anything' />
    <button className='active:scale-95 border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer'>Search</button>
</form>

    </div>
  )
}

export default SearchBar