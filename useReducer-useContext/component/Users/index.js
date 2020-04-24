import React,{useContext,useEffect} from 'react'
import ajax from '../../request'
import Context from '../../createStore'


export default function Users() {
    const {state,dispatch} = useContext(Context)
    useEffect(()=>{
        ajax('./name').then((response)=>{
            dispatch({type:'setUser',user:response})
        })
    },[])
    console.log(state)
    return (
        <div>
            <h1>个人信息:</h1>
            {state.user?<ul>{state.user.map(item=><li key={item.id}>{item.name}</li>)}</ul>:'无'}
        </div>
    )
}