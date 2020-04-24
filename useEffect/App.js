import React,{useState, useEffect} from 'react'

export default function App() {
    const [value,setValue] = useState(0)
    useEffect(()=>{
        const f = document.getElementById('xxx').innerText = '10000'
       
        
    },[value])
    return (
    <div id="xxx">{value}</div>
    )

    // const [n,setN] = useState(0)

    // const add = ()=>{
    //     setN((state)=>{
    //         return state+1
    //     })
       
    // }
    // useEffect(()=>{
    //     console.log('notes:多个useEffect会依次执行哦')
    //     console.log('挂载后执行一次，再也不会执行')
    // },[])
    // useEffect(()=>{
    //     n !== 0 && console.log('依赖的数据更新之后执行,不写第二个参数代表任何依赖变化都会执行哦')
        
    // },[n])

    // return (
    //     <div>
    //         {n}
    //         <div>
    //             <button onClick={add}>+</button>
    //         </div>
    //     </div>
    // )
}

//useEffect 副作用
//对环境的改变即是副作用，如修改document.title，但我们不一定要把副作用放到useEffect 实际上叫做afterRender更好，每次render后运行

//用途
//作为componentDidmount使用，[] 做第二个参数 ，挂载后
//作为componentDidupdate使用，，可指定依赖   更新后
//作为 componentWillUnmount使用 通过return 返回函数 

//特点
//多个useEffcte 按照顺序执行

//useLayoutEffect  可以截胡 解决闪烁问题
//因为渲染的顺序是  App() => 执行 => vdom => 对比结束后的dom => render => useEffect
// 而useELayoutEffect 可以在 render之前执行  从而直接将结果截胡并且渲染
