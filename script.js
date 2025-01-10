const versio1 = document.getElementById("versio1");
const versio2 = document.getElementById("versio2");
const pelaa = document.getElementById("pelaa");
const lopeta=document.getElementById("lopeta");
const tulokset = [];
const restartBtn = document.getElementById("restart");
let vuoro=1;
console.log(vuoro);
let pelaaja1_pisteet=0;
let pelaaja2_pisteet=0;
let pelaaja3_pisteet=0;
let pelaaja4_pisteet=0;
let nimi1;
let nimi2;
let nimi3;
let nimi4;

function RollDice() {
    const valinta=document.getElementById("valinta");
    if(valinta.value==="kaksi_pelaaja"){
        if(nimi1===undefined || nimi2===undefined || nimi1===null || nimi2===null){
            nimi1=prompt("Syöttö pelaajan 1 nimi:");
            nimi2=prompt("Syöttö pelaajan 2 nimi:");
        }
        document.getElementById("pelaaja1_pisteet").textContent=`${nimi1} pisteet:${pelaaja1_pisteet}`;
        document.getElementById("pelaaja2_pisteet").textContent=`${nimi2} pisteet:${pelaaja2_pisteet}`;
    }
    else if(valinta.value==="nelja_pelaaja"){
        if(nimi1===undefined || nimi2===undefined || nimi3===undefined || nimi4===undefined || nimi1===null || nimi2===null || nimi3===null || nimi4===null){
            nimi1=prompt("Syöttö pelaajan 1 nimi:");
            nimi2=prompt("Syöttö pelaajan 2 nimi:");
            nimi3=prompt("Syöttö pelaajan 3 nimi:");
            nimi4=prompt("Syöttö pelaajan 4 nimi:"); 
        }
        document.getElementById("pelaaja1_pisteet").textContent=`${nimi1} pisteet:${pelaaja1_pisteet}`;
        document.getElementById("pelaaja2_pisteet").textContent=`${nimi2} pisteet:${pelaaja2_pisteet}`;
        document.getElementById("pelaaja3_pisteet").textContent=`${nimi3} pisteet:${pelaaja3_pisteet}`;
        document.getElementById("pelaaja4_pisteet").textContent=`${nimi4} pisteet:${pelaaja4_pisteet}`;
    }
    const noppaKuvat = document.getElementById("kuvat");
    let kuvat = [];
    const pisteet = document.getElementById("pisteet");
    let tulos = Math.floor(Math.random() * 6) + 1;
    tulokset.push(tulos);
    kuvat.push(`<img src="dice_kuvat/${tulos}.png">`);
    if(vuoro===1){
        document.getElementById("nykyinen_pelaaja").textContent=`${nimi1} vuora`;
    }
    if(vuoro===2){
        document.getElementById("nykyinen_pelaaja").textContent=`${nimi2} vuora`;
    }
    if(vuoro===3){
        document.getElementById("nykyinen_pelaaja").textContent=`${nimi3} vuora`;
    }
    if(vuoro===4){
        document.getElementById("nykyinen_pelaaja").textContent=`${nimi4} vuora`;
    }

    if (tulos === 1) {
        pisteet.textContent = "Tapio, paina 'pelaa' tai 'Restart' yrittämään uudelleen";
        tulokset.length = 0;
        stopTurn()
    } else {
        let summa = 0;
        for (let i of tulokset) {
            summa += i;
            pisteet.textContent = `Pisteet: ${summa}`;
        }
        if (summa >= 25) {
            pisteet.textContent = "Voitto, paina 'Restart' pelaamaan uudelleen";
        } else {
            pisteet.textContent = `Pisteet: ${summa}`;
        }
    }
    noppaKuvat.innerHTML = kuvat.join(" ");
}
function stopTurn(){
    if(valinta.value==="kaksi_pelaaja"){
        if(vuoro===1){
            for (let i of tulokset) {
                pelaaja1_pisteet += i;
            }
            document.getElementById("pelaaja1_pisteet").textContent=`${nimi1}:n pisteet:${pelaaja1_pisteet}`;
            vuoro=2;
            console.log(vuoro);
            tulokset.length = 0;
            const pisteet = document.getElementById("pisteet");
            pisteet.textContent = "Pisteet: 0";
            const noppaKuvat = document.getElementById("kuvat");
            noppaKuvat.innerHTML = "";
        }
        else if(vuoro===2){
            for (let i of tulokset) {
                pelaaja2_pisteet += i;
            }
            document.getElementById("pelaaja2_pisteet").textContent=`${nimi2}:n pisteet:${pelaaja2_pisteet}`;
            vuoro=1;
            console.log(vuoro);
            tulokset.length = 0;
            const pisteet = document.getElementById("pisteet");
            pisteet.textContent = "Pisteet: 0";
            const noppaKuvat = document.getElementById("kuvat");
            noppaKuvat.innerHTML = "";
        }
    }
    if(valinta.value==="nelja_pelaaja"){
        if(vuoro===1){
            for (let i of tulokset) {
                pelaaja1_pisteet += i;
            }
            document.getElementById("pelaaja1_pisteet").textContent=`${nimi1}:n pisteet:${pelaaja1_pisteet}`;
            vuoro=2;
            console.log(vuoro);
            tulokset.length = 0;
            const pisteet = document.getElementById("pisteet");
            pisteet.textContent = "Pisteet: 0";
            const noppaKuvat = document.getElementById("kuvat");
            noppaKuvat.innerHTML = "";
        }
        else if(vuoro===2){
            for (let i of tulokset) {
                pelaaja2_pisteet += i;
            }
            document.getElementById("pelaaja2_pisteet").textContent=`${nimi2}:n pisteet:${pelaaja2_pisteet}`;
            vuoro=3;
            console.log(vuoro);
            tulokset.length = 0;
            const pisteet = document.getElementById("pisteet");
            pisteet.textContent = "Pisteet: 0";
            const noppaKuvat = document.getElementById("kuvat");
            noppaKuvat.innerHTML = "";
        }
        else if(vuoro===3){
            for (let i of tulokset) {
                pelaaja3_pisteet += i;
            }
            document.getElementById("pelaaja3_pisteet").textContent=`${nimi3}:n pisteet:${pelaaja3_pisteet}`;
            vuoro=4;
            console.log(vuoro);
            tulokset.length = 0;
            const pisteet = document.getElementById("pisteet");
            pisteet.textContent = "Pisteet: 0";
            const noppaKuvat = document.getElementById("kuvat");
            noppaKuvat.innerHTML = "";
        }
        else if(vuoro===4){
            for (let i of tulokset) {
                pelaaja4_pisteet += i;
            }
            document.getElementById("pelaaja4_pisteet").textContent=`${nimi4}:n pisteet:${pelaaja4_pisteet}`;
            vuoro=1;
            console.log(vuoro);
            tulokset.length = 0;
            const pisteet = document.getElementById("pisteet");
            pisteet.textContent = "Pisteet: 0";
            const noppaKuvat = document.getElementById("kuvat");
            noppaKuvat.innerHTML = "";
        }
    }
}

function Restart() {
    pelaaja1_pisteet=0;
    pelaaja2_pisteet=0;
    pelaaja3_pisteet=0;
    pelaaja4_pisteet=0;
    tulokset.length = 0;
    const pisteet = document.getElementById("pisteet");
    pisteet.textContent = "Pisteet: 0";
    const noppaKuvat = document.getElementById("kuvat");
    noppaKuvat.innerHTML = "";
    document.getElementById("pelaaja1_pisteet").textContent="";
    document.getElementById("pelaaja2_pisteet").textContent="";
    document.getElementById("pelaaja3_pisteet").textContent="";
    document.getElementById("pelaaja4_pisteet").textContent="";
}

pelaa.addEventListener("click", RollDice);
lopeta.addEventListener("click",stopTurn);
restartBtn.addEventListener("click", Restart);
