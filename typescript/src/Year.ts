export class Year {
  private matchTheFourRule (year: number): boolean {
    const four = 4;
    return (year % four) === 0;
  }

  private matchTheOneHundredRule (year: number): boolean {
    const oneHundred = 100;
    return year % oneHundred === 0 
  }

  private matchTheFourHundredRule (year: number): boolean {
    const fourHundred = 400;
    return year % fourHundred !== 0 
  }

  isLeap (year: number): boolean {
    if (this.matchTheOneHundredRule(year) && this.matchTheFourHundredRule(year)) {
      return false
    }
    return this.matchTheFourRule(year)
  }
}
