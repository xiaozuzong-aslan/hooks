import React,{useRef, useEffect} from 'react'


// export default function App() {
    
//     const count = useRef(0)
//     const _setN = useState(0)[1]
   
//     const [n,setN] = useState(0)
//     const onClick = ()=>{
//         setN(n=>n+1)    
//     }
//     // useEffect(()=>{
        
//     //     console.log(`App执行了:${count.current}次`)
//     // })
//     const add = ()=>{
//         count.current+=1//Ref虽然被改变但是不会重新渲染 可以通过set重新渲染
//         _setN(Math.random)

//     }
//     return (
//         <div>
//             <button onClick={onClick}>xxxxx:n{n}</button>
//             <button onClick={add}>count:n{count.current}</button>
//         </div>
//     )
// }
export default function App(){
    const AppRef = useRef(null)
    useEffect(()=>{
        console.log(AppRef.current)
    })
    return (
        <div className='App'>
            <Button ref={AppRef}>xxx</Button>
        </div>
        
    )
}

const Button = React.forwardRef((props,ref) =>{
   
    return <button className = 'red' ref={ref} {...props} />
})

//函数想拿到组件对象需要用react.forwardRef 包裹住该组件

//自定义Ref使用uselmperativeHandle