export class Year {

  constructor (private readonly year: number) {}

  isLeap (): boolean {
    if (this.year % 100 === 0 && this.year % 400 !== 0) {
      return false;
    }
    return (this.year % 4) === 0 
  }
}
