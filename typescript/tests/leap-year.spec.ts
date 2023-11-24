import { LeapYear } from '../src/leap-year'

describe('Leap year', () => {
  it('should not be a leap year when year is three', () => {
    const leapYear = new LeapYear()
    expect(leapYear.isLeap(3)).toBeFalsy()
  })

  it('should be a leap year when year is eight', () => {
    const leapYear = new LeapYear()
    expect(leapYear.isLeap(8)).toBeTruthy()
  })
})
