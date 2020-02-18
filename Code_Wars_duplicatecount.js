function duplicateCount(text){
  let new_array = []
  const array = text.split("").map(item => item.toLowerCase())
  for (var i = 0; i < array.length; i++) {
    if(array.indexOf(array[i]) != array.lastIndexOf(array[i])){
      new_array.push(array[i])
    }
  }
  return [...new Set(new_array)].length
}

console.log((duplicateCount("aabBcde")));
