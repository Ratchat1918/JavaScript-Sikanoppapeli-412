const versio1 = document.getElementById("versio1");
const versio2 = document.getElementById("versio2");
const pelaa = document.getElementById("pelaa");
const tulokset = [];
const restartBtn = document.getElementById("restart");

function RollDice() {
    const noppaKuvat = document.getElementById("kuvat");
    let kuvat = [];
    const pisteet = document.getElementById("pisteet");
    let tulos = Math.floor(Math.random() * 6) + 1;
    tulokset.push(tulos);
    kuvat.push(`<img src="dice_kuvat/${tulos}.png">`);

    if (tulos === 1) {
        pisteet.textContent = "Tapio, paina 'pelaa' tai 'Restart' yrittämään uudelleen";
        tulokset.length = 0;
    } else {
        let summa = 0;
        for (let i of tulokset) {
            summa += i;
        }
        if (summa >= 25) {
            pisteet.textContent = "Voitto, paina 'pelaa' tai 'Restart' pelaamaan uudelleen";
            tulokset.length = 0;
        } else {
            pisteet.textContent = `Pisteet: ${summa}`;
        }
    }
    noppaKuvat.innerHTML = kuvat.join(" ");
}

function Restart() {
    tulokset.length = 0;
    const pisteet = document.getElementById("pisteet");
    pisteet.textContent = "Pisteet: 0";
    const noppaKuvat = document.getElementById("kuvat");
    noppaKuvat.innerHTML = "";
}

pelaa.addEventListener("click", RollDice);
restartBtn.addEventListener("click", Restart);
