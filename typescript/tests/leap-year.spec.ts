import { LeapYear } from '../src/leap-year'

describe('Leap year', () => {

  let leapYear: LeapYear;

  beforeEach(()=>{
    leapYear = new LeapYear();
  })

  it.each([4, 8])('should be a leap year when year is %i', (year) => {
    expect(leapYear.isLeap(year)).toBeTruthy()
  })


  it('should not be a leap year when year is three', () => {
    expect(leapYear.isLeap(3)).toBeFalsy()
  })

  it('should not be a leap year when year is 100', () => {
    expect(leapYear.isLeap(100)).toBeFalsy()
  })
  it('should not be a leap year when year is 200', () => {
    expect(leapYear.isLeap(200)).toBeFalsy()
  })

  it.each([1600])('should be a leap year when year is %i', (year) => {
    expect(leapYear.isLeap(year)).toBeTruthy()
  })
})
