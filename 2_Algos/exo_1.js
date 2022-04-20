const array = [10, 15, 3, 0]
const k = 17


const isSumK = (n) => {
  for (i = 0; i < n.length; i++) {
    for (j = i + 1; j < n.length; j++) {
      let sum = n[i] + n[j];
      if (sum === k) {
        return true;
      }; 
    };
  };
return false;
};
console.log(isSumK(array));