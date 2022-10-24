import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import Game from '../../components/Game'

export const openTheGame = () => {
  // render(<Game />)
}

export const loadMockData = (mockData) => {
  // TODO
}

export const leftClickOnCell = (row, col) => {
  userEvent.click(screen.getByTestId('cell-row' + row + '-col' + col))
}

export const righClickOnCell = (row, col) => {
  fireEvent.contextMenu(screen.getByTestId('cell-row' + row + '-col' + col))
}

export const tagCell = (row, col, tag) => {
 // TODO
}

export const isGameOver = () => {
  return screen.getByTestId('game-status').textContent === 'Game Over'
}

export const isGameWon = () => {
  return screen.getByTestId('game-status').textContent === 'Game Won'
}

export const isUncovered = (row, col) => {
  const cell = screen.getByTestId('cell-row' + row + '-col' + col)
  return cell.nodeName !== 'BUTTON'
}
