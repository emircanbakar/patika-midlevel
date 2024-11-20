const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Dairenin yarıçapını giriniz: ", (input) => {
  const radius = parseFloat(input);

  if (isNaN(radius) || radius <= 0) {
    console.log("Lütfen pozitif bir sayı giriniz.");
  } else {
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area.toFixed(2)}`);
  }

  rl.close();
});
