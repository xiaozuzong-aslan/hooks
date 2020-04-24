import user from './user'
import book from './book'
import movie from './movie'

const initState = {
    ...user.initState,
    ...book.initState,
    ...movie.initState
}
const obj = {
    ...user.obj,
    ...book.obj,
    ...movie.obj
}



const reducer = (state,action)=>{
    if(obj[action.type]){
        return obj[action.type](state,action)
    }else{
        throw new Error('你传的什么鬼')
    }
 
}

export {
    reducer, initState
}