function findMissingLetter(array){
  let new_array = []
  var arr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  for (var i = 0; i < array.length; i++) {
    new_array.push(arr.slice(arr.indexOf(array[0]),arr.indexOf(array[i])))
  }
 return (new_array.pop().filter(item => item != array[array.indexOf(item)]))
 }
console.log(findMissingLetter(['O','Q','R','S']))
