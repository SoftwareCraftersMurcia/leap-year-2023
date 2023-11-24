const Year = {
  isLeap: (year: number): boolean => {
    const four = 4;
    const isDivisibleByFour = (year % four) === 0;
  
    const oneHundred = 100;
    const fourHundred = 400;
    const isDivisibleByOneHundredButNotByFourHundred = year % oneHundred === 0 && year % fourHundred !== 0;

    if (isDivisibleByOneHundredButNotByFourHundred) return false

    return isDivisibleByFour
  }
}

export default Year;