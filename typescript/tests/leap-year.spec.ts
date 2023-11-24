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

  it.each([100, 200])('should not be a leap year when year is %i', (year) => {
    expect(leapYear.isLeap(year)).toBeFalsy()
  })

  it.each([1600])('should be a leap year when year is %i', (year) => {
    expect(leapYear.isLeap(year)).toBeTruthy()
  })
})
