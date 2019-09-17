function rot13(str) {
  //Split the original string to chars
  const codeArr = str.split('');
  const decodeArr = [];
  const alphabet13 = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M'
  ];

  for (let i = 0; i < codeArr.length; i++) {
    // If not the letter don't transform
    if (alphabet13.indexOf(codeArr[i]) === -1) {
      decodeArr.push(codeArr[i]);
    } else {
      for (let j = 0; j < alphabet13.length; j++) {
        //Transform the letter
        if (codeArr[i] === alphabet13[j]) {
          decodeArr.push(alphabet13[j + 13]);
        }
      }
    }
  }

  return decodeArr.join('');
}

console.log(rot13('SERR PBQR PNZC'), 'FREE CODE CAMP');
