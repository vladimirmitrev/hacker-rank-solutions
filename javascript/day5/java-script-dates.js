function getDayName(dateString) {
  const dayName = new Date(dateString).toLocaleString('en-us', {weekday:'long'})
  
  return dayName;
}


function main(input) {
  const d =  input.shift();
  
  for (let i = 0; i < d; i++) {
      const date = input.shift();
      
      console.log(getDayName(date));
  }
}
main([
  '2', 
  '10/11/2009',
  '11/10/2010', 
  ]);