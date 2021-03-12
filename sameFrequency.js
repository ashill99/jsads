function sameFrequency(num1, num2){
    let snum1 = num1.toString();
    let snum2 = num2.toString();
    if (snum1.length !== snum2.length) {
        return false;
    }
        const compare = {};
        for (let i = 0; i < snum1.length; i++ ) {
            let number = snum1[i];
            compare[number] ? compare[number] += 1 : compare[number] = 1;
        }
        console.log(compare)

  for (let j = 0; j < snum2.length; j++) {
      let number = snum2[j];
      if (!compare[number]) {
          return false;
      } else {
          compare[number] -= 1;
      }
    }
      return true;
  }

  sameFrequency(123, 321)
