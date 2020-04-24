function ajax(path){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(path==='./name'){
                resolve([
                    {
                        id:1,
                        name:'小可爱'
                    }
                ])
            }else if(path==='./books'){
                resolve([
                    {
                        id:1,
                        name:'蝴蝶书'
                    },
                    {
                        id:2,
                        name:'编程艺术'
                    }
                ])
            }else if(path==='./movies'){
                resolve([
                    {
                        id:1,
                        name:'小黄人'
                    },
                    {
                        id:2,
                        name:'剑风传奇'
                    }
                ])
            }
        },3000)
    })
}
export default ajax