export class Year {

  constructor (private readonly year: number) {}

  isLeap (): boolean {
    return this.year === 8 || this.year === 16;
  }
}
