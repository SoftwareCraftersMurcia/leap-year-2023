import { LeapYear } from '../src/leap-year'

describe('Leap year', () => {
  it('should not be a leap year when year is three', () => {
    const example = new LeapYear()
    expect(example.isLeap(3)).toBeFalsy()
  })
})
