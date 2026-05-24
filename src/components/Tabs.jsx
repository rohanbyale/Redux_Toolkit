import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs =['photos','videos']
    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.search.activeTab)
  return (
    <div className='flex gap-10 p-10 '>
{tabs.map(function(elem,idx){
    return (
    <button key={idx} className={`${(activeTab==elem?'bg-blue-800':'bg-gray-700')} transition  px-5 py-2 rounded uppercase cursor-pointer active:scale-95`}

    onClick={()=>{
        dispatch(setActiveTabs(elem))
    }}
    > {elem} </button>
)
 
})} 
    </div>
  )
}

export default Tabs