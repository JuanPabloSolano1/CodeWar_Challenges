var summation = function (num) {
  let count = 0
  for (var i = num; i >= 0; i--) {
    count += i
  }
  return count
}
console.log(summation(8))
