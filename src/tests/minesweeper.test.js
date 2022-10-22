import { loadFeature, defineFeature } from 'jest-cucumber'

const featureFile = loadFeature('./src/features/minesweeper.core.feature')

defineFeature(featureFile, test => {

})