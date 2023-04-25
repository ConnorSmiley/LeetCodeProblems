











let array =["eat","tea","tan","ate","nat","bat"]



const something = (a) => {
    let object = {}
    console.log(object)
    for (let b of a){
        let sort = b.split("").sort().join("")
        for (i of sort) {
            object[i] ? object[i].push(b) : object[i] = [b]
        }
        return Object.values(object);
    }
}



console.log(something(array))
