const pelaa = document.getElementById("pelaa");
const restarBtn = document.getElementById("restart");
let tulokset = [];

function RollDice() {
    const pisteet = document.getElementById("pisteet");
    const noppaKuvat = document.getElementById("kuvat");
    let kuvat = [];
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    kuvat.push(`<img src="dice_kuvat/${num1}.png">`);
    kuvat.push(`<img src="dice_kuvat/${num2}.png">`);
    noppaKuvat.innerHTML = kuvat.join(" ");

    if ((num1 === 1 && num2 !== 1) || (num2 === 1 && num1 !== 1)) {
        tulokset.length = 0; 
        pisteet.textContent = "Tapio, paina 'pelaa' tai 'Restart' yrittämään uudelleen";
    } else {
        let summa = 0;
        for (let i of tulokset) {
            summa += i;
        }

        if (num1 === 1 && num2 === 1) {
            let a = 25;
            tulokset.push(a);
        } else if (num1 === num2) {
            let b = (num1 + num2) * 2;
            tulokset.push(b);
        } else {
            let c = num1 + num2;
            tulokset.push(c);
        }

        summa = tulokset.reduce((acc, val) => acc + val, 0); 

        if (summa >= 100) {
            pisteet.textContent = "Voitto, paina 'pelaa' tai 'Restart' pelaamaan uudelleen";
            tulokset.length = 0;
        } else {
            pisteet.textContent = `Pisteet: ${summa}`;
        }
    }
}

function Restart() {
    tulokset.length = 0;
    const pisteet = document.getElementById("pisteet");
    pisteet.textContent = "Pisteet: 0";
    const noppaKuvat = document.getElementById("kuvat");
    noppaKuvat.innerHTML = "";
}

pelaa.addEventListener("click", RollDice);
restarBtn.addEventListener("click", Restart);