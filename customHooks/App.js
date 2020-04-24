import React from 'react'
import useList from './hooks/useList'
export default function App() {
    const {list,setList} = useList()
    
    return (
        <div>
            {list?<ul>{list.map((item,index)=><li key={index}>{item}</li>)}</ul>:'无'}
            xxx
        </div>
    )
}
