var cells = document.getElementsByClassName('cells')
var platform = document.getElementsByClassName('platform')[0]
var turn
startGame()
playerTurn()

function startGame() {
    for (var i = 0; i < cells.length; i++)
        cells[i].addEventListener('click', play, {once: true})
}

function play(Event){
    if (turn == 'xTurn') Event.target.classList.add('x')
    else Event.target.classList.add('o')
    playerTurn()
}

function playerTurn(){
    if (turn == 'xTurn'){
        platform.classList.remove('x')
        platform.classList.add('o')
        turn = 'oTurn'
    } else {
        platform.classList.remove('o')
        platform.classList.add('x')
        turn = 'xTurn'
    }
}