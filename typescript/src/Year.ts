export class Year {
  
  constructor (private readonly year: number) {}
  
  private matchTheFourRule (): boolean {
    return (this.year % 4) === 0;
  }

  private matchTheOneHundredRule (): boolean {
    return this.year % 100 === 0 
  }

  private matchTheFourHundredRule (): boolean {
    return this.year % 400 !== 0 
  }

  isLeap (): boolean {
    if (this.matchTheOneHundredRule() && this.matchTheFourHundredRule()) {
      return false
    }
    return this.matchTheFourRule()
  }
}
