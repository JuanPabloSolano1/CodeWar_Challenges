function iqTest(numbers){
  numbers = numbers.split(" ")
  let even_numbers = []
  let odd_numbers = []
 numbers.map(number =>{
   if(number % 2 == 0){
     even_numbers.push(numbers.indexOf(number) + 1)
   }else
     odd_numbers.push(numbers.indexOf(number) + 1)
 })
 return even_numbers.length > odd_numbers.length? (odd_numbers[0]) : (even_numbers[0])
}
console.log(iqTest("1 2 1 1"))

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
//
// iqTest("1 2 1 1") => 2
