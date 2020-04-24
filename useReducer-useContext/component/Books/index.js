import React,{useContext,useEffect} from 'react'
import ajax from '../../request'
import Context from '../../createStore'


export default function Books() {
    const {state,dispatch} = useContext(Context)
    useEffect(()=>{
        ajax('./books').then(response=>{
            dispatch({type:'setBooks',books:response})
        })
       },[])
    return (
        <div>
             <h1>我喜欢的书是:{state.books?<ul>{state.books.map(item=><li key={item.id}>{item.name}</li>)}</ul>:'无'}</h1>
        </div>
    )
}

