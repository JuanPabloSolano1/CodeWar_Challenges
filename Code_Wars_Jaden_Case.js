String.prototype.toJadenCase = function () {
let new_list = []
this.split(" ").map(element=>{
  new_list.push((element[0].toUpperCase() + element.slice(1,element.length)))
})
return(new_list.join(" "))
}
var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase())
