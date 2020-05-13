
String.prototype.reversed = function() {
  let string = this.split("")
  let count = string.length - 1
  let new_string = ""
  while (count >= 0){
    new_string += (string[count])
    count --
  }
  return(new_string)
}

console.log("Hello There".reversed())
