/* eslint-disable no-undef */
/* eslint-disable jest/no-jasmine-globals */
import { loadFeature, defineFeature } from 'jest-cucumber'
import * as steps from './steps/minesweeper.steps.js'

const featureFile = loadFeature('./src/features/minesweeper.core.feature', {
  errors: {
    missingScenarioInStepDefinitions: false, // Error when a scenario is in the feature file, but not in the step definition
    missingStepInStepDefinitions: false, // Error when a step is in the feature file, but not in the step definitions
    missingScenarioInFeature: false, // Error when a scenario is in the step definitions, but not in the feature
    missingStepInFeature: false, // Error when a step is in the step definitions, but not in the feature
  }
});

defineFeature(featureFile, test => {
  test('Starting game - All the cells should be hidden', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    });

    then('all the cells should be covered', () => {
      pending();
    });
  });

  test('Starting game - All the cells should be enabled', ({ given, then }) => {
    given('the player opens the game', () => {
      steps.openTheGame()
    });

    then('all the cells should be enabled', () => {
      pending();
    });
  });

  test('Uncovering a cell - Disabling the cell', ({ given, when, then }) => {
    given('the player opens the game', () => {
      
    });

    given('the player loads the following mock data:', (docString) => {

    });

    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    then(/^the cell \((\d+),(\d+)\) should be disabled$/, (arg0, arg1) => {
      pending();
    });
  });

  test('Uncovering a cell with the mouse - Using mouse left click', ({ given, when, then }) => {
    given('the player opens the game', () => {

    });

    given('the player loads the following mock data:', (docString) => {

    });

    when(/^the player left clicks on the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    then(/^the cell \((\d+),(\d+)\) should be disabled$/, (arg0, arg1) => {
      pending();
    });
  });

  test('Uncovering a cell with a mine - Losing the game', ({ given, when, then }) => {
    given('the player opens the game', () => {

    });

    given('the player loads the following mock data:', (docString) => {

    });

    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    then('the player should lose the game', () => {
      pending();
    });
  });

  test('Uncovering a cell with a mine - Showing a highlighted mine', ({ given, when, then }) => {
    given('the player opens the game', () => {

    });

    given('the player loads the following mock data:', (docString) => {

    });

    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    then(/^the cell \((\d+),(\d+)\) should show: a highlighted mine$/, (arg0, arg1) => {
      pending();
    });
  });

  test('Uncovering an empty cell - Uncovering neighbor cells', ({ given, when, then }) => {
    given('the player opens the game', () => {

    });

    given('the player loads the following mock data:', (docString) => {

    });

    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    then('the minefield should look like this:', (docString) => {
      pending();
    });
  });

  test('Suspecting that a cell is hiding a mine - Tagging as mined', ({ given, when, then }) => {
    given('the player opens the game', () => {

    });

    when(/^the player tags as "(.*)" the cell \((\d+),(\d+)\)$/, (arg0, arg1, arg2) => {

    });

    then(/^the cell \((\d+),(\d+)\) should show: mined$/, (arg0, arg1) => {
      pending();
    });
  });

  test('Untagging the mined tag - Removing the mined symbol', ({ given, when, then }) => {
    given('the player opens the game', () => {

    });

    given(/^When the player tags as "(.*)" the cell \((\d+),(\d+)\)$/, (arg0, arg1, arg2) => {

    });

    when(/^the player untags the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    then(/^the cell \((\d+),(\d+)\) should not show: mined$/, (arg0, arg1) => {
      pending();
    });
  });

  test('Tagging a cell as mined using the mouse - Using mouse right click', ({ given, when, then }) => {
    given('the player opens the game', () => {

    });

    when(/^the player right clicks on the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    then(/^the cell \((\d+),(\d+)\) should show: mined$/, (arg0, arg1) => {
      pending();
    });
  });

  test('Untagging a mined cell using the mouse - Using mouse right click twice', ({ given, when, and, then }) => {
    given('the player opens the game', () => {

    });

    given(/^the player tags as "(.*)" the cell \((\d+),(\d+)\)$/, (arg0, arg1, arg2) => {

    });

    when(/^the player right clicks on the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    and(/^the player right clicks on the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    then(/^the cell \((\d+),(\d+)\) should not show: mined$/, (arg0, arg1) => {
      pending();
    });
  });

  test('Discovering all the cells without mines - Winning the game', ({ given, when, then }) => {
    given('the player opens the game', () => {

    });

    given('the player loads the following mock data:', (docString) => {

    });

    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    then('the player should win the game', () => {
      pending();
    });
  });

  test('Uncovering a cell with no mine - Displaying the number of adjacent mines', ({ given, when, then }) => {
    given('the player opens the game', () => {

    });

    given(/^the player loads the following mock data: (.*)$/, (arg0) => {

    });

    when(/^the player uncovers the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    then(/^the cell \((\d+),(\d+)\) should show: (.*)$/, (arg0, arg1, arg2) => {
      pending();
    });
  });

  test('Uncovering a cell with no mine or mines around it - Displaying an empty cell', ({ given, when, then }) => {
    given('the player opens the game', () => {

    });

    given('the player loads the following mock data:', (docString) => {

    });

    when(/^the player uncovers the cell \((.*),(.*)\)$/, (arg0, arg1) => {

    });

    then(/^the cell \((\d+),(\d+)\) should show: empty$/, (arg0, arg1) => {
      pending();
    });
  });

  test('Finishing game, disabling all the cells', ({ given, when, then }) => {
    given('the player opens the game', () => {
      return 'pending'
    });

    given('the player loads the following mock data:', (docString) => {

    });

    when(/^the player uncovers the cell \((.*),(.*)\)$/, (arg0, arg1) => {

    });

    then('all the cells should be disabled', () => {
      pending();
    });
  });

})