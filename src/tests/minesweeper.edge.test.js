/* eslint-disable no-undef */
/* eslint-disable jest/no-jasmine-globals */
import { loadFeature, defineFeature } from 'jest-cucumber'

const featureFile = loadFeature('./src/features/minesweeper.edge.feature');

defineFeature(featureFile, test => {

  test('Tagging as mined a revelaed cell - No tagging allowed', ({ given, and, when, then }) => {
    given('the player opens the game', () => {

    });

    given('the player loads the following mock data:', (docString) => {

    });

    and(/^the player uncovers the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    when(/^the player tags as "(.*)" the cell \((\d+),(\d+)\)$/, (arg0, arg1, arg2) => {

    });

    then(/^the cell \((\d+),(\d+)\) should show: (\d+)$/, (arg0, arg1, arg2) => {
      pending();
    });
  });

  test('Tagging as mined a disabled cell - No tagging allowed', ({ given, and, when, then }) => {
    given('the player opens the game', () => {

    });

    given('the player loads the following mock data:', (docString) => {

    });

    and(/^the player uncovers the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    when(/^the player tags as "(.*)" the cell \((\d+),(\d+)\)$/, (arg0, arg1, arg2) => {

    });

    then(/^the cell \((\d+),(\d+)\) should not show: mined$/, (arg0, arg1) => {
      pending();
    });
  });

  test('Tagging as uncertain a revelaed cell - No tagging allowed', ({ given, and, when, then }) => {
    given('the player opens the game', () => {

    });

    given('the player loads the following mock data:', (docString) => {

    });

    and(/^the player uncovers the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    when(/^the player tags as "(.*)" the cell \((\d+),(\d+)\)$/, (arg0, arg1, arg2) => {

    });

    then(/^the cell \((\d+),(\d+)\) should show: (\d+)$/, (arg0, arg1, arg2) => {
      pending();
    });
  });

  test('Tagging as uncertain a disabled cell - No tagging allowed', ({ given, and, when, then }) => {
    given('the player opens the game', () => {

    });

    given('the player loads the following mock data:', (docString) => {

    });

    and(/^the player uncovers the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    when(/^the player tags as "(.*)" the cell \((\d+),(\d+)\)$/, (arg0, arg1, arg2) => {

    });

    then(/^the cell \((\d+),(\d+)\) should not show: uncertain$/, (arg0, arg1) => {
      pending();
    });
  });

  test('Tagging a cell as uncertain - Left mines counter does not change', ({ given, when, then }) => {
    given('the player opens the game', () => {

    });

    given('the player loads the following mock data:', (docString) => {

    });

    when(/^the player tags as "(.*)" the cell \((\d+),(\d+)\)$/, (arg0, arg1, arg2) => {

    });

    then(/^the left mines counter should be (\d+)$/, (arg0) => {
      pending();
    });
  });

  test('Untagging an uncertain cell - Left mines counter does not change', ({ given, and, when, then }) => {
    given('the player opens the game', () => {

    });

    given('the player loads the following mock data:', (docString) => {

    });

    and(/^the player tags as "(.*)" the cell \((\d+),(\d+)\)$/, (arg0, arg1, arg2) => {

    });

    when(/^the player untags the cell \((\d+),(\d+)\)$/, (arg0, arg1) => {

    });

    then(/^the left mines counter should be (\d+)$/, (arg0) => {
      pending();
    });
  });

  test('Detecting the absence of mines - Winning the game', ({ given, then }) => {
    given('the player opens the game', () => {

    });

    given('the player loads the following mock data:', (docString) => {

    });

    then('the player should win the game', () => {
      pending();
    });
  });

  test('Detecting the absence of mines - Disabling all the cells', ({ given, then }) => {
    given('the player opens the game', () => {

    });

    given('the player loads the following mock data:', (docString) => {

    });

    then('all the cells should be disabled', () => {
      pending();
    });
  });

})