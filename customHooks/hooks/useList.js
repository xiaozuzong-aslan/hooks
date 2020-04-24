import { useState, useEffect } from "react"
import ajax from './ajax'

const useList = ()=>{
    const [list,setList] = useState(null)
    useEffect(()=>{
        ajax('./list').then(response=>setList(response))
    },[])
    return {list,setList}
}
export default useList