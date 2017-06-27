import Hello from './Hello'
const { describe, it, expect } = global

describe('hello', () => {
  it('should return "Hello World"', () => {
    expect(Hello).toBe('Hello World')
  })
})
