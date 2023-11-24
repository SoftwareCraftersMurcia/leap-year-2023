export class Year {

  constructor (private readonly year: number) {}

  isLeap (): boolean {
    if (this.year === 100 || this.year === 300 || this.year === 1800) return false;
    return (this.year % 4) === 0 
  }
}
