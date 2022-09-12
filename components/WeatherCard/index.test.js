import React from 'react'
import { test, expect, jest } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'
import WeatherCard from '.'

describe('Weather Card Testing', () => {
  test('WeatherCard renders a card', () => {
    render(<WeatherCard />)
  })
})
