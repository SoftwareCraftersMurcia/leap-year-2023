import { Year } from '../src/Example'

describe('kata-setup', () => {
  it('given a not divisible number by 4 it return leap year', () => {
    const year  = new Year(3)

    expect(year.isLeap()).toBe(false)
  })
})
