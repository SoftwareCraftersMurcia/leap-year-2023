import { Year } from '../src/Year'

describe('Year', () => {
  it('given a not divisible number by 4 it return a not leap year', () => {
    const year = new Year(3)
    expect(year.isLeap()).toBe(false)
  })

  it('given a divisible number by 100 but not for 400 it return a not leap year', () => {
    const year = new Year(100)
    expect(year.isLeap()).toBe(false)
  })

  it('given a divisible number by 100 but not for 400 it return a not leap year', () => {
    const year = new Year(300)
    expect(year.isLeap()).toBe(false)
  })

  it('given a divisible number by 100 but not for 400 it return a not leap year', () => {
    const year = new Year(1800)
    expect(year.isLeap()).toBe(false)
  })

  it.each([8, 12, 16])('given the year %p is disvisible by 4 it return a leap year', (leapYear) => {
    const year = new Year(leapYear)
    expect(year.isLeap()).toBe(true)
  })
})
