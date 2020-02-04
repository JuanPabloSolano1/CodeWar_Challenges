var lengthOfSequence = function (arr, n) {
let new_array = []
if(arr.length < 2){
  return 0
}else if (arr.length == 2){
  return 2
} else {
 for (var i = 0; i < arr.length; i++) {
   if(arr[i] == n){
     new_array.push(arr.indexOf(n),arr.lastIndexOf(n))
   }
 }
  if(new_array.length > 4){
    return 0
  } else {
 check = [...new Set(new_array)]
 return(check.reduce((a,b) => (b - a) + 1))
}
}
};
