function fizzBuzz(n) {
  var m3 = n % 3 === 0;
  var m5 = n % 5 === 0;

  if      (m3 && m5) return 'FizzBuzz';
  else if (m3)       return "Fizz";
  else if (m5)       return 'Buzz';
  else               return n;
}

function playFizzBuzz(min, max) {
  for (var i=min; i<=max; i++) {
    console.log(fizzBuzz(i));
  }
}

playFizzBuzz(1, 100);
