import React,{useState,memo, useMemo} from 'react'









function App() {
    const [n,setN] = useState(0)
    const [m,setM] = useState(0)
    const onClick = ()=>{
        setN(n=>n+1)
        
    }
    const onClickClid = useMemo(() => ()=>{setM(n=>n+1)},[])//第一个值是函数，第二个值是依赖
    // const onClickClid = useMemo(useCallback(()=>setM(n=>n+1)),[])//第一个值是函数，第二个值是依赖
    return (
        <div className='app'>
            <div><button onClick={onClick}>update:n{n}</button></div>
            <Child2  data={m} onClick={onClickClid}/>
        </div>
    )
}




const Child2 = memo((props)=>{
    console.log('我执行了')
    console.log('假设这里有大量代码')
    console.log(props)
    return (
        <div onClick={props.onClick}>Child:{props.data}</div>
    )
}) 

//react.memo  解决多余的render
//使得一个组件只有当它的props属性发生变化的时候才会再次渲染
//但是这有一个bug 因为每当父组件从新执行，如果有函数传递下去也就是props  因为函数是地址，所哟每次执行都是新的地址 故而回触发渲染
//通过useMemo可以接受一一个函数  返回一个操作方法或者对象解决这个问题


export default App