// asal sayı döndüren fonk.
// 1 ve kendisine bölüneek 1den büyük pozitif sayılar

const argmnts = process.argv.slice(2);

function showPrimeNumbers(lownumber, highnumber) {
  for (let i = lownumber; i <= highnumber; i++) {
    let isPrime = true;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j !== i) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

showPrimeNumbers(argmnts[0] * 1, argmnts[1] * 1);

//REPL = read evaluate print loop
