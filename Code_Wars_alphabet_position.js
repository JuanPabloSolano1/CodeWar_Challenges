function alphabetPosition(text) {
  final_text = text.replace(/[^a-zA-Z]/g, '').toLowerCase().split("")
  let abecedary = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const check = final_text.map(element =>{
     return  abecedary.indexOf(element) + 1
  })
  return (check.join(" "))
  }
