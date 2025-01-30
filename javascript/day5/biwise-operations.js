function getMaxLessThanK(n, k) {
  let maxValue = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = i + 1; j <= n; j++) {
        const bitwiseAnd = i & j;
        if (bitwiseAnd < k && bitwiseAnd > maxValue) {
          maxValue = bitwiseAnd;
        }        
      }    
    }

  return maxValue;
}

function main(input) {
  const q = input.shift();
  
  for (let i = 0; i < q; i++) {
      const [n, k] = input.shift().split(' ').map(Number);
      
      console.log(getMaxLessThanK(n, k));
  }
}

main([
  '3', 
  '5 2',
  '8 5', 
  '2 2'
  ]);