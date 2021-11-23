const pilih = document.querySelectorAll('.pilih');
let play = true;

pilih.forEach(e => {
    if (!e.classList.contains('is-com')) {
        e.addEventListener('click', () => {
            if (play) {
                removeClassActive(pilih);
                e.classList.add('active');
                play = false;
            }
        });
    }
});

function removeClassActive(pilih) {
    pilih.forEach(e => {
        if (!e.classList.contains('is-com')) {
            e.classList.remove('active');
        }
    });
}

function removeComClassActive() {
    const isCom = document.querySelectorAll('.is-com');
    isCom.forEach(e => {
        e.classList.remove('active');
    });
}



function comSelect() {
    removeComClassActive();
    const com = Math.floor((Math.random() * 3) + 1);

    if (com === 1) {
        const isCom = document.querySelector('.is-com-batu');
        isCom.classList.add('active');
        return 'batu';

    } else if (com === 2) {
        const isCom = document.querySelector('.is-com-kertas');
        isCom.classList.add('active');
        return 'kertas';

    } else if (com === 3) {
        const isCom = document.querySelector('.is-com-gunting');
        isCom.classList.add('active');
        return 'gunting';
    }
}


const versus = document.querySelector(".versus");
const draw = document.querySelector(".draw");
const playerWin = document.querySelector(".player-win");
const comWin = document.querySelector(".com-win");

function getResult(com, player) {
    if (player === com) {
        draw.classList.remove("d-none");
        playerWin.classList.add("d-none");
        versus.classList.add("d-none");
        comWin.classList.add("d-none");

        return "Draw";

    } else if (
        player === 'batu' && com === 'gunting' ||
        player === 'kertas' && com === 'batu' ||
        player === 'gunting' && com === 'kertas') {
        playerWin.classList.remove("d-none");
        draw.classList.add("d-none");
        versus.classList.add("d-none");
        comWin.classList.add("d-none");


        return "Player 1 Win";

    } else if (
        com === 'batu' && player === 'gunting' ||
        com === 'kertas' && player === 'batu' ||
        com === 'gunting' && player === 'kertas') {
        comWin.classList.remove("d-none");
        playerWin.classList.add("d-none");
        draw.classList.add("d-none");
        versus.classList.add("d-none");

        return "Com Win";
    }

}

const isPlayer = document.querySelectorAll('.pilih img')

isPlayer.forEach(function(player) {
    if (!player.parentNode.classList.contains('is-com')) {
        player.addEventListener('click', function() {
            console.clear();
            if (play) {

                const plSelect = player.className;
                console.log("Player 1: " + plSelect)

                const compRand = comSelect();
                console.log('Computer: ' + compRand);

                const result = getResult(compRand, plSelect);
                console.log("Game result: " + result);
            }
        })
    }
});

const refreshButton = document.getElementsByClassName("refreshButton")[0];
refreshButton.addEventListener('click', function() {

    location.reload();

})