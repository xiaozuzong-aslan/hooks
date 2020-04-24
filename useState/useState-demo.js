import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from '../serviceWorker'

console.log(`
    版本1
    缺点：只能定义单个数据
    let state //定义一个全局变量
    const myUseState = initValue =>{//useState接受一个初始值
        state = state === undefined ? initValue:state //如果这个值已经存在就保持不变state=state，
        //如果不存在就赋值state=initValue,这么做是因为每次操作数据或者DOM都会重新执行App,避免每次state都为初始值
        const setStat = newValue =>{
            state = newValue//setSate直接对state赋值修改
            render()
        }
        return [state,setStat]//返回新的值和 修改值的方法
    }`
    )
let state = [] //定义一个全局变量，可接受多个参数   
let index = 0//设置索引值，用来确保每次调用App的时候数据对应的位置   state和index将来会放到虚拟DOM上  以保证每一个组件都有一个自己的inde和state
const myUseState = initValue =>{//useState接受一个初始值
    let currentIndex = index //保存当前的索引，方便每次执行完后对 Index加+1 并且retrun当前的值

    state[currentIndex] = state[currentIndex] === undefined ? initValue:state[currentIndex] //如果这个值已经存在就保持不变state=state，
    //如果不存在就赋值state=initValue,这么做是因为每次操作数据或者DOM都会重新执行App,避免每次state都为初始值
    const setStat = newValue =>{
        state[currentIndex] = newValue//setSate直接对state赋值修改
        render()
    }
    index += 1
    console.log(state)
    return [state[currentIndex],setStat]//返回新的值和 修改值的方法
}

function App(){
    const [n,setN] = myUseState(0)
    const [m,setM] = myUseState(0)
    // let m,setM  
    // if(n%2===1){
    //     [m,setM] = useState(0)
    // }
    // const [f,setF] = myUseState(0)
    //useState 严重依赖数组的顺序 所以不能放在if里
    //vue 3 克服了这个问题

    return (
        <>
            <div>{n}</div>
            <div>
                <button onClick={()=>{
                    setN(n+1)
                }}>+</button>
                <button onClick={()=>{
                    setN(n-1)
                }}>-</button>
            </div>
            <hr />
            <div>{m}</div>
            <div>
                <button onClick={()=>{
                    setM(m+1)
                }}>+</button>
                <button onClick={()=>{
                    setM(m-1)
                }}>-</button>
            </div>
        </>
    )
}

const render = ()=>{
    index = 0//每次从新执行App，要把index归零，不然数值中会出现重复的数据
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)
serviceWorker.unregister()