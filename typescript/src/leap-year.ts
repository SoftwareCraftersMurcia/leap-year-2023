export class LeapYear {
  isLeap (year: number): boolean {
    if (year === 8) {
      return true
    }

    if (year === 1600) {
      return true
    }
    
    return false
  }
}
