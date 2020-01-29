function spinWords(word){
word = (word.split(" "))
let new_list = []
word.map(element=>{
  element.length >= 5? new_list.push(element.split("").reverse().join("")) : new_list.push(element)
})
return (new_list. join(" "))
}
console.log(spinWords("Hey fellow warriors"))
