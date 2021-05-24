function task331ab(n) {
  for (let i = 1; i * i < n; i++) {
    for (let j = 0; j * j < n; j++) {
      for (let k = 0; k * k < n; k++) {
        if (i * i + j * j + k * k === n)
          return `${i}^2 + ${j}^2 + ${k}^2 = ${n}`;
      }
    }
  }
}
