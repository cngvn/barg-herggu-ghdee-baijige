function fill(arr){
    const num = arr.filter((item, index)=>
        arr.indexOf(item) !==index)
    if(num.lenght>0){
        return false;
    }else{
        return true
    }
}
let number = [1,2,3,4]
console.log(fill(number))
