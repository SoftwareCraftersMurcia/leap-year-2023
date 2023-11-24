import { LeapYear } from '../src/leap-year'

describe('Leap year', () => {
  
  let leapYear: LeapYear;

  beforeEach(()=>{
    leapYear = new LeapYear();
  })

  
  it('should not be a leap year when year is three', () => {
    expect(leapYear.isLeap(3)).toBeFalsy()
  })

  it('should be a leap year when year is four', () => {
    expect(leapYear.isLeap(4)).toBeTruthy()
  })

  it('should be a leap year when year is eight', () => {
    expect(leapYear.isLeap(8)).toBeTruthy()
  })

  it('should be a leap year when year is 1600', () => {
    expect(leapYear.isLeap(1600)).toBeTruthy()
  })
})
