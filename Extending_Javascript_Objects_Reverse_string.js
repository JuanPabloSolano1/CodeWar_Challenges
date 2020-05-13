
String.prototype.reversed = function() {
  let count = this.length - 1
  let new_string = ""
  while (count >= 0){
    new_string += (this[count])
    count --
  }
  return(new_string)
}

console.log("Hello There".reversed())

String.prototype.reversed = function() {
  let new_array = []
  for(i = this.length; i >= 0 ; i--){
    new_array.push(this[i])
  }
  return new_array.join("")
}
console.log("Hello There".reversed())
