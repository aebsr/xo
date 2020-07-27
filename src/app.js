import React, { useState } from 'react'
import ReactDOM from 'react-dom' 
import './styles/styles.scss'
import Aside from './components/Aside'

const Board = () => {
  const newBoard = ['','','','','','','','','']
  const [board, setBoard] = useState(newBoard)
  const [currentPlayer, changePlayer] = useState('x')
  const [asideVisible, setAside] = useState(false)
  const [hasWinner, setWinner] = useState(false)
  const aside = document.getElementsByClassName('aside')
  const winnerEl = document.querySelector('.winner')
  const winningCombos = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8]
  ]

  const play = (index, value) => {
    let updatedBoard = [...board]

    if(!value && !hasWinner) {
      updatedBoard[index] = currentPlayer
      setBoard(updatedBoard)

      if (checkWinner(updatedBoard)) {
        winnerEl.innerText = `${currentPlayer} wins!`
        winnerEl.focus()
        setWinner(true)
      } else {
        changePlayer(currentPlayer === 'x' ? 'o' : 'x' )
      }
    }
  }

  const checkWinner = (board) => {
    let winner = undefined;
    for(let i = 0; i < winningCombos.length && !winner; i++) {
      const test = winningCombos[i].map(index => board[index])
      winner = test.every((value,place) => {
        if(place === 0) {
          return true
        } else {
          return value && value === test[place - 1]
        }
      })
    }
    return winner
  }

  const triggerAside = () => {
    setAside(!asideVisible)
    if (asideVisible) { aside.focus() }
  }

  document.addEventListener('keyup', (e) => {
    if (e.code === 'Escape') {
      setAside(false)
    }
  })

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="winner"></div>
      <div className="board">
        {board.map((player, index) => {
          return (
            <div
              className={`cell cell_${player}`}
              key={index}
              onClick={() => play(index, player)}>
              <span className="letter">{player}</span>
            </div>
          )
        })}
      </div>
      <button className="reset-button" onClick={() => {
        setBoard(newBoard)
        changePlayer('x')
        setWinner(false)
        winnerEl.innerText = ''
      }}>Reset</button>
      <button className="open-aside" onClick={triggerAside}>
        <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
      </button>
      <Aside close={() => setAside(false)} asideVisible={asideVisible} />
    </>
  )
}

ReactDOM.render(
  <Board />,
  document.getElementById('app')
)
