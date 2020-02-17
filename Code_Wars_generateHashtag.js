function generateHashtag (str) {
 if(str[1] == " " || str == ""){
   return false
 } else{
   let string = str.split(" ")
   const check = (array) => array.filter(word => word != "")
   .map(item => item[0].toUpperCase() + item.slice(1,item.length))
   let new_string = (check(string).join(""))
   return new_string.length > 140? false :`#${new_string}`
 }
}

console.log(generateHashtag(" ".repeat(10)))
console.log(generateHashtag("code" + " ".repeat(10) + "wars"))
console.log(generateHashtag((" Hello there thanks for trying my Kata")))
