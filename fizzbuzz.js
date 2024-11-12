function fizzbuzz(nombre) {
    if (nombre % 3 === 0 && nombre % 5 === 0) {
      return "fizzbuzz";
    } else if (nombre % 3 === 0) {
      return "fizz";
    } else if (nombre % 5 === 0) {
      return "buzz";
    } else {
      return nombre;
    }
  }
  

  console.log(fizzbuzz(2));
  console.log(fizzbuzz(5));
  console.log(fizzbuzz(6));
  console.log(fizzbuzz(11));
  console.log(fizzbuzz(30));