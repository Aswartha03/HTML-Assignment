function input(list,emailList){
    let res=[]
    for(let ele of list){
        ele = ele.split(" ")
        let first = ele[0].toLower()
        let second = ele[1].toLower()
        console.log(first,second)
    }
}
let Names= [
    "John Smith",
    "Jane Doe",
    "John Simpson",
    "Jane Davis"]
let emails=[
    "johns@company.com",
  "janed1@company.com"]
input(Names,emails)
// output
// [
//     "johns1@company.com",
//     "janed@company.com",
//     "johns2@company.com",
//     "janed2@company.com"
//   ]
  