
function persistence(num) {
  let number = num
  let finalnumber = 1
  let count_array = []

  while(number.toString().length >= 2){
    number.toString().split("").forEach(element =>{
      finalnumber *= element
    })
    number = finalnumber
    finalnumber = 1
    count_array.push(number)
  }
  return(count_array.length)
}
console.log(persistence(999))
