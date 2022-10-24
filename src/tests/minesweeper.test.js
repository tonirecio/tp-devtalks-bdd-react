/* eslint-disable no-undef */
/* eslint-disable jest/no-jasmine-globals */
import { loadFeatures, autoBindSteps } from 'jest-cucumber'
import * as steps from './steps/minesweeper.steps.js'

const features = loadFeatures('./src/features/**/*.feature')
  
const stepsRef = ({ given, and, when, then }) => {
  given('the player opens the game', () => {
    steps.openTheGame()
  })
  given(/^When the player tags as "(.*)" the cell \((\d+)\s?,\s?(\d+)\)$/, (tag, row, col) => {
  })
  given('the player loads the following mock data:', (mockData) => {
  })
  given(/^the player loads the following mock data: (.*)$/, (mockData) => {
  })
  when(/^the player left clicks on the cell \((\d+)\s?,\s?(\d+)\)$/, (row, col) => {
  })
  when(/^the player uncovers the cell \((\d+)\s?,\s?(\d+)\)$/, (row, col) => {
  })
  when(/^the player tags as "(.*)" the cell \((\d+)\s?,\s?(\d+)\)$/, (tag, row, col) => {
  })
  when(/^the player untags the cell \((\d+)\s?,\s?(\d+)\)$/, (row, col) => {
  })
  when(/^the player right clicks on the cell \((\d+)\s?,\s?(\d+)\)$/, (row, col) => {
  })
  then(/^the cell \((\d+)\s?,\s?(\d+)\) should be disabled$/, (row, col) => {
    pending()
  })
  then('the player should lose the game', () => {
    pending()
  })
  then('all the cells should be covered', () => {
    pending()
  })
  then('all the cells should be enabled', () => {
    pending()
  })
  then('the player should win the game', () => {
    pending()
  })
  then('all the cells should be disabled', () => {
    pending()
  })
  then(/^the left mines counter should be (.*)$/, (counter) => {
    pending()
  })
  then(/^the cell \((\d+)\s?,\s?(\d+)\) should show: (.*)$/, (row, col, content) => {
    pending()
  })
  then(/^the cell \((\d+)\s?,\s?(\d+)\) should not show: (.*)$/, (row, col, tag) => {
    pending()
  })
  then('the minefield should look like this:', (expectedMineFieldStatus) => {
    pending()
  })
}

autoBindSteps(features, [stepsRef])
