import { Year } from '../src/Year'

describe('Year', () => {
  it('given a not divisible number by 4 it return a not leap year', () => {
    const year = new Year(3)

    expect(year.isLeap()).toBe(false)
  })
  it('given a divisible number by 4 it return a leap year', () => {
    const year = new Year(8)
    expect(year.isLeap()).toBe(true)
  })

  it('given a divisible number by 4 it return a leap year', () => {
    const year = new Year(16)
    expect(year.isLeap()).toBe(true)
  })
})
