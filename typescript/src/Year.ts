export class Year {

  constructor (private readonly year: number) {}

  isLeap (): boolean {
    return (this.year % 4) === 0
  }
}
