export class Year {
  
  constructor (private readonly year: number) {}
  
  private matchTheFourRule (): boolean {
    const four = 4;
    return (this.year % four) === 0;
  }

  private matchTheOneHundredRule (): boolean {
    const oneHundred = 100;
    return this.year % oneHundred === 0 
  }

  private matchTheFourHundredRule (): boolean {
    const fourHundred = 400;
    return this.year % fourHundred !== 0 
  }

  isLeap (): boolean {
    if (this.matchTheOneHundredRule() && this.matchTheFourHundredRule()) {
      return false
    }
    return this.matchTheFourRule()
  }
}
