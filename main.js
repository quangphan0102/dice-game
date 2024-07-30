//List of pictures:
const pictureList = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png',
]

const diceBtn = document.querySelector('.btn');

let player1WinCount = 0;
let player2WinCount = 0;

diceBtn.onclick = () => {
    //1. Adding image into image tag:
    const imgOne = document.querySelector('.img1');
    const imgTwo = document.querySelector('.img2');

    //2. Creating 2 player: 

    //Player 1: 
    // 1. Generate random number for player to pick a picture:
    let player1 = Math.round(Math.random() * (pictureList.length - 1));
    let player2 = Math.round(Math.random() * (pictureList.length - 1));

    //Condiction which players will win
    if (player1 > player2) {
        document.querySelector('h1').innerHTML = "🥇 Player One WINS ";
        player1WinCount++;
        document.querySelector('.win-count-p1').innerHTML = player1WinCount;
    }
    else if (player1 === player2) {
        document.querySelector('h1').innerHTML = "🎉 DRAWWW 🎉";
    }
    else {
        document.querySelector('h1').innerHTML = " Player Two WINS 🥇";
        player2WinCount++;
        document.querySelector('.win-count-p2').innerHTML = player2WinCount;
    }

    //Adding picture source for player:

    imgOne.src = pictureList[player1];
    imgTwo.src = pictureList[player2];
}

