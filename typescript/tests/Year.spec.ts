import { Year } from '../src/Year'

describe('Year', () => {
  let year: Year;
  beforeEach(() => {
    year = new Year()
  })

  it.each([3, 7, 6])('given a not divisible number by 4 it return a not leap year', (notLeapYear) => {
    expect(year.isLeap(notLeapYear)).toBe(false)
  })

  it.each([100, 200, 300])('given the year %p is disvisible by 100 it return a not leap year', (notLeapYear) => {
    expect(year.isLeap(notLeapYear)).toBe(false)
  })
  
  it.each([500, 600, 700])('given the year %p is not by 400 it return a not leap year', (notLeapYear) => {
    expect(year.isLeap(notLeapYear)).toBe(false)
  })

  it.each([8, 12, 16, 1600])('given the year %p is disvisible by 4 it return a leap year', (leapYear) => {
    expect(year.isLeap(leapYear)).toBe(true)
  })
})
