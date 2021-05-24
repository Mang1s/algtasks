function task108(number) {
  if (numberIsPrime(number)) {
    let power = 0;
    let base = 2;
    while (Math.pow(base, power) <= number) {
      power++;
    }
    console.log(
      "base:",
      base,
      "to power:",
      power,
      "result number:",
      Math.pow(base, power)
    );
  } else {
    console.log("number should be prime");
  }
}

function numberIsPrime(num) {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}
