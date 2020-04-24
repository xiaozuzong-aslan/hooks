function ajax(path){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(path==='./list'){
                resolve([
                    '1',
                    '2',
                    '3',
                    '4',
                    '5'
                ])
            }
        },3000)
    })
}
export default ajax