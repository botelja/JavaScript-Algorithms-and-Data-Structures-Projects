function convertToRoman(num) {
  // String for storing roman number
  let roman = '';
  // Array of possible roman numbers
  const romanNumerals = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ];
  // Eqivalent number to roman number
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  //Iterate for a length of numbers array
  for (let i = 0; i < numbers.length; i++) {
    //While original number is less or equal to current number in numbers array
    while (num >= numbers[i]) {
      // Add roman number
      roman += romanNumerals[i];
      // Substract original number from current number in numbers array
      num -= numbers[i];
    }
  }
  return roman;
}

console.log(convertToRoman(36), 'XXXVI');
