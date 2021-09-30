function api(result){
    return new Promise((resolve,reject) => {
        console.log("result:",result)
        resolve(2)
    })
}
function api2(result2){
    return new Promise((resolve,reject) => {
        console.log("result2:",result2)
        resolve(3)
    })
}
function api3(result3){
    console.log("result3:",result3);
}

async function callApi(){
    const result = await api(1)
    const result2 = await api2(result)
    api3(result2)
}
callApi()