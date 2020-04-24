import React,{useContext,useEffect} from 'react'
import ajax from '../../request'
import Context from '../../createStore'
export default function Movie() {
    const {state,dispatch} = useContext(Context)
    useEffect(()=>{
        ajax('./movies').then(response=>{
            dispatch({type:'setMovies',movies:response})
        })
    },[])
    return (
        <div>
            <h1>我喜欢的电影是:</h1>
            {state.movies?<ul>{state.movies.map(item=><li key={item.id}>{item.name}</li>)}</ul>:'无'}
        </div>
    )
}
