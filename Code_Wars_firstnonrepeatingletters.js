function firstNonRepeatingLetter(s) {
 if (s == '') {
  return ''
 } else {
  const lowCase = (array) => array.map(item => item.toLowerCase())
  let string = s.split("")
  string = lowCase(string)
  let counter = {}

  string.map(element => {
   counter[element] >= 1 ?
    counter[element] += 1 : counter[element] = 1
  })
  let new_list = []
  for (const i in counter) {
   if (counter[i] <= 1) {
    new_list.push(string.indexOf(i))
   }
  }
  return (s.split("")[new_list[0]] != undefined ? s.split("")[new_list[0]] : '')
 }
}
  console.log(firstNonRepeatingLetter("Stress"))

  function firstNonRepeatingLetter(s) {
    var t=s.toLowerCase();
    for (var x=0;x<t.length;x++)
      if(t.indexOf(t[x]) == t.lastIndexOf(t[x]))
        return s[x];
    return "";
  }
  console.log(firstNonRepeatingLetter("sTRress"))
