String.prototype.toJadenCase = function () {
return this.split(" ").map(function(element){
  return (element[0].toUpperCase() + element.slice(1))
}).join(" ")
}

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase())
