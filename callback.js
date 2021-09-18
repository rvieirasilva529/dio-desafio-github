const teste = function (cb){
    console.log("funcao teste ")
    console.log(cb)
    if(typeof cb === "function"){ // ou typeof cb === "function" && cb(30)
        cb(30)
    }
}
const fn = function (param) {
    console.log("funcao anonima de callback")
    console.log(param)

}

//fn(30)
teste()