const initState = {//数据集中再一个store对象
    user:null,
    // books:null,
    // movies:null
}

const obj = {
    setUser:(state,action)=>{
        return {...state,user:action.user}
    }
    // ,
    // setBooks:(state,action)=> {
    //     return {...state,books:action.books}
    // },
    // setMovies:(state,action)=> {
    //     return {...state,movies:action.movies}
    // },
    // setXXX:(state,action)=> {
    //     return {...state,books:action.books}
    // },
    // setYYY:(state,action)=> {
    //     return {...state,books:action.books}
    // },
    // setZZZ:(state,action)=> {
    //     return {...state,books:action.books}
    // },
}

// const reducer = (state,action)=>{
//     if(obj[action.type]){
//         return obj[action.type](state,action)
//     }else{
//         throw new Error('你传的什么鬼')
//     }
 
// }

// const reducer = (state,action)=>{//所有的操作集中在reducer
//     switch(action.type){
//         case 'setUser':
//             return {...state,user:action.user}
//         case 'setBooks':
//             return {...state,books:action.books}
//         case 'setMovies':
//             return {...state,movies:action.movies}
//         default:
            
//     }
// }
export default {
    initState,
    obj
}