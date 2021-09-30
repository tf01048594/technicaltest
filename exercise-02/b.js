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
    console.log("result3:",result3)
}
api(1)
.then(result2 => api2(result2))
.then(result3 => api3(result3))
.catch(err => {
    throw err
})