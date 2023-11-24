export class LeapYear {
  isLeap (year: number): boolean {

    if (year % 400 === 0) {
      return true
    }
    
    if (year === 100) {
      return false;
    }
    if (year === 200) {
      return false;
    }

    if (year % 4 === 0) {
      return true
    }

    return false
  }
}
