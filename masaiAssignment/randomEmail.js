function input(list,emailList){
    let res=[]
    for(let ele of list){
        ele = ele.split(" ")
        // console.log(ele)
        let first = ele[0].toLowerCase()
        let second = ele[1].toLowerCase()
        let name = first+second[0]+"@company.com"
        if(emailList.includes(name)==false){
          res.push(name)
        }
        else{
            name=name+1
            res.push(name)
        }
    }
    console.log(res)
}
let Names=[
    "John Smith",
    "Jane Doe",
    "John Simpson",
    "Jane Davis"]
let emails=[
    "johns@company.com",
  "janed1@company.com"]
input(Names,emails)
// [
// "johns1@company.com",
// "janed@company.com",
// "johns2@company.com",
// "janed2@company.com"
