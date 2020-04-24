import React,{useReducer} from 'react'
import {Movie,Books,Users} from './component'

import {reducer, initState} from './reducers'
import Context from './createStore'



function App() {
    const [state, dispatch] = useReducer(reducer, initState)//创建读写api
    return (
        <div>
            <Context.Provider value={{//将内容放入Context
                state,dispatch
            }}>
                <Users />
                <hr />
                <Movie />
                <hr />
                <Books />
               
            </Context.Provider>

            
        </div>
    )
}






export default App


