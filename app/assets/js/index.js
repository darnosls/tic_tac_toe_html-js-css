let boardIndex = new Array(9)
let optionsComp = [] //jogador temporário
let postionTab = null


var board = $('#board')[0]
board.addEventListener("click", el => {
  if (!el.target.id) {
    return
  }
  boardIndex[el.target.id.split('-')[1]] = 'X'
  document.getElementById(el.target.id).style.pointerEvents = "none";

  optionsComp = getPlayBoard(boardIndex)
  postionTab = optionsComp[Math.floor(Math.random() * optionsComp.length)]
  boardIndex[postionTab] = 'O'
  document.getElementById("bd-" + postionTab).style.pointerEvents = "none";

  if (boardIndex.filter(() => {return true}).length >= 5 ) {
    if (boardIndex[0] === 'X' && boardIndex[1] === 'X' && boardIndex[2] === 'X') {
      console.log('X Win...')
    } else if (boardIndex[3] === 'X' && boardIndex[4] === 'X' && boardIndex[5] === 'X') {
      console.log('X Win...')
    } else if (boardIndex[6] === 'X' && boardIndex[7] === 'X' && boardIndex[8] === 'X') {
      console.log('X Win...')
    } else if (boardIndex[0] === 'X' && boardIndex[3] === 'X' && boardIndex[6] === 'X') {
      console.log('X Win...')
    } else if (boardIndex[1] === 'X' && boardIndex[4] === 'X' && boardIndex[7] === 'X') {
      console.log('X Win...')
    } else if (boardIndex[2] === 'X' && boardIndex[5] === 'X' && boardIndex[8] === 'X') {
      console.log('X Win...')
    } else if (boardIndex[0] === 'X' && boardIndex[4] === 'X' && boardIndex[8] === 'X') {
      console.log('X Win...')
    } else if (boardIndex[2] === 'X' && boardIndex[4] === 'X' && boardIndex[6] === 'X') {
      console.log('X Win...')
    }
  }
}, false)



function getPlayBoard(el) {
  let arr = []
  el.find(function(value, index) {
    if (!value) {
      arr.push(index)
    }
  })
  return arr
}