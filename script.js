import { salut as salutare } from './functii.js';
import { adunarea, scaderea } from './mathUtils.js';
import saluta from './salutari.js'
import * as date from './dateUtilizator.js'
// 1.1 Declarați trei variabile utilizând var, let, și const.
//  Atribuiți-le valori de tip number, string și boolean.
let nume = "Cristina";
const numar = 10;
var boolValue = true;

// 1.2 Scrieți o funcție care primește o variabilă ca parametru și 
// returnează tipul său de date utilizând typeof
const functie = (nume) => {

    return typeof nume;
}
console.log(functie("Cristina Cecan"));


// 1.3 Convertiți o valoare de tip string în number și invers. 
// Exemplu: "123" → 123 și 456 → "456".

let str = '123';
console.log(typeof str)

let convertToNumber = Number(str)
console.log(typeof convertToNumber)

let convertToString = String(convertToNumber)
console.log(typeof convertToString)


// 1.4 Declarați două variabile (nume, varsta) și creați o propoziție
// utilizând șabloane de string-uri (template literals - ``).
const numele = 'Cristina';
const varsta = 26;
console.log(`Ma numesc ${numele}  si am ${varsta} de ani.`);


// 1.5 Folosiți o variabilă temporară pentru a schimba valorile
// dintre două variabile.

let x = 10;
let y = 15;
let temp = x;
x = y;
y = temp;
console.log(x, y);

// 1.6 Scrieți o funcție care verifică dacă o variabilă este de tip
// null sau undefined.

// ??????
const verifyType = (variabilă) => {
    if (variabilă === null || variabilă === undefined) { return typeof variabilă }
}
console.log(verifyType());


// // 1.7 Creați un obiect cu mai multe proprietăți (string, number, boolean).
// // Adăugați și eliminați dinamic o proprietate la obiect.

const student = {
    nume: 'Cristina',
    anStudii: 2,
    isStudent: true

}

const limba = 'limba'
student[limba] = 'Romana'

delete student[limba];
delete student.anStudii;

console.log(student)

// 1.8 Declarați un array care conține minim 5 valori fiecare un tip de date diferit.
// Iterați prin array și afișați tipul fiecărui element.

let arr4 = ['Cristina', 2, true, {}, undefined, []]

for (let el of arr4) {
    console.log(typeof el)
}



// 2. Funcții

// 2.1 Scrieți o funcție care primește două
// numere ca parametri și returnează suma lor.

function suma(a, b) {
    return a + b;
}
console.log(suma(3, 7))


// 2.2 Creați o funcție care calculează aria unui dreptunghi.
// Dacă înălțimea nu este specificată, să aibă valoarea implicită de 1.

const aria = (lungimeL, inaltimeH = 1) => {
    return lungimeL * inaltimeH;
}
console.log("aria  dreptunghiului este:", aria(9, 5))


// 2.3 Declarați o funcție anonimă și asociați-o unei variabile.
//  Funcția să returneze pătratul unui număr.

let anonimFunction = function (x) {
    return x ** 2;
}
console.log(anonimFunction(5))

// 2.4 Scrieți o funcție care primește un string, îl convertește
// la litere mari și returnează numărul de caractere.

let convertToUpperCase = (str = 'cristina') => {
    let convert = str.toUpperCase()
    console.log(convert)
    return console.log(convert.length)
}
convertToUpperCase();


// 2.5 Creați o funcție principală care primește un număr și folosește
//  alte două funcții: una pentru a calcula dublul numărului și alta pentru
// a calcula pătratul. Returnați rezultatele ambelor într-un obiect.
const calcDubluNr = (nr) => {
    return nr * 2;
}
const calcPatratNr = (nr1) => {
    return nr1 ** 2;
}
const principalFunction = (n) => {
    let patratNr = calcPatratNr(n)
    let dubluNr = calcDubluNr(n)

    return {
        patrat: patratNr,
        dublu: dubluNr

    }
}
console.log(principalFunction(5))


// 2.6 Rescrieți funcția de calcul al sumei folosind o expresie săgeată.
const summ = (a, b) => {
    return a + b;
}
console.log("arowSum", summ(4, 4));

// 2.7 Scrieți o funcție care aplică o
// altă funcție asupra fiecărui element al unui array.
let nr = [1, 2, 3, 4, 5, 6, 7]

const inmultesteNr = (n) => {
    return n * 3;
}
const utilizeazaFunctie = (arr, functie) => {
    for (let el of arr) {
        const rezult = functie(el)
        console.log(rezult)
    }
}
utilizeazaFunctie(nr, inmultesteNr)

// 3. Obiecte

// 3.1 Declarați un obiect masina cu următoarele proprietăți:
// marca, model, și an. Atribuiți valori pentru fiecare proprietate.
const masina = {
    marca: "Aston Martin",
    model: "Aston Martin DB5",
    an: 1913
}
console.log(masina)


// 3.2 Afișați valoarea proprietăților marca și
//  model utilizând atât notația cu punct, cât și cea
// cu paranteze pătrate.
console.log(masina.marca)
console.log(masina["model"])

// 3.3 Adăugați o proprietate nouă, culoare, și actualizați
// proprietatea an cu o valoare diferită.
masina.culoare = "Verde"
masina.an = 2026
console.log(masina)


// 3.4 Ștergeți proprietatea model din obiect.
delete masina.model
console.log(masina)


// // 3.5 Folosiți for...in pentru a itera prin toate
// //  proprietățile unui obiect și afișați cheile și valorile acestora.
for (el in masina) {
    console.log(el, masina[el])
}


// 3.6 Adăugați o metodă descriere în obiectul masina care
// să returneze un string cu toate informațiile despre mașină.
masina.descriere = function () {
    return `Masina este ${this.marca} si are modelul ${this.model} si este din anul ${this.an}`
}
console.log(masina.descriere())

// 3.7 Scrieți o funcție care primește un obiect persoana cu proprietăți
// nume și varsta și returnează un mesaj personalizat, în care să se conțină valorile
//  ambelor proprietăți.
const persoana = {
    nume: "ANA",
    varsta: 30
}
const functieN = ({ }) => {

    return `${persoana.nume} inplineste ${persoana.varsta} ani.`
}
console.log(functieN(persoana))

// 3.8 Verificați dacă obiectul masina conține 
// o proprietate culoare utilizând operatorul in.
console.log("culoare" in masina);

// 3.9 Declarați un obiect casa care să conțină 
// un alt obiect adresa cu proprietăți precum strada și oras.

const casa = {
    adresa: {
        strada: "Alexei Mateevici",
        oras: "Chisinau"
    }
}
console.log(casa)

// 3.10 Scrieți o funcție care primește parametri, creează și 
// returnează un obiect student cu proprietățile nume, varsta și nota.
const createObject = (nume, varsta, nota) => {
    const student = {
        nume: nume,
        varsta: varsta,
        nota: nota
    }
    return student;
}
console.log(createObject("Cristina", 26, 8));


// 3.11 Folosiți Object.assign și operatorul spread (...)
// pentru a clona obiectul masina în alte obiecte.

const useSpred = { ...masina };

// Object.assign ----

// 3.12 Creați un obiect calculator cu metode pentru adunare,
// scădere, înmulțire și împărțire.
const calculator = {
    adunare: (a, b) => { return a + b },
    scadere: (a, b) => { return a - b },
    inmultire: (a, b) => { return a * b },
    inpartire: (a, b) => { return a / b }
}
console.log(calculator.adunare(10, 2));
console.log(calculator.scadere(10, 2));
console.log(calculator.inmultire(10, 2));
console.log(calculator.inpartire(10, 2));

// 3.13 Folosiți destructurarea pentru a extrage câteva
// proprietăți dintr-un obiect.

const { model, marca } = masina

console.log(model)


// // 4. Array-uri

// 4.1 Declarați un array cu trei nume de
// orașe și afișați primul și ultimul element.

const arr = ["Chisinau", "Balti", "Edinet"]
console.log(arr[0], arr[2])

// 4.2 Adăugați un oraș la sfârșitul și
// începutul array-ului. Ștergeți ultimul oraș.

arr.push("Soroca")
console.log(arr)
arr.unshift("Tiraspol");
console.log(arr)
arr.pop()
console.log(arr);


// 4.3 Folosiți un for pentru a itera printr-un
//  array de culori și afișați fiecare element.

let tablou = ["Rosu", "Verde", "Galben", "Roz", "Negru"];

for (let i = 0; i < tablou.length; i++) {
    console.log(tablou[i]);
}

for (el in tablou) {
    console.log(tablou[el])
}

// 4.4 Folosiți metoda forEach pentru a parcurge un array cu
// denumiri de animale și afișați fiecare element cu un mesaj personalizat.

let arrAnimale = ["Pisica", "Caine", "Vulpe", "Ursul", "Iepure"]
arrAnimale.forEach((el) => {
    if (el === "Pisica") {
        console.log(`Am o ${el} gri `);
    }
    if (el === "Caine") {
        console.log(`${el} latra toata ziua.`)
    }
    if (el === "Vulpe") {
        console.log(`${el} aleargă prin pădure noaptea.`);
    }
    if (el === "Ursul") {
        console.log(`${el} iarna hiberneaza.`)
    }
    if (el === "Iepure") {
        console.log(`${el} este micut.`)
    }
})



// 4.5 Scrieți o funcție care primește un array de numere și 
// returnează doar numerele mai mari de 10.
const numbers = [2, 3, 15, 26, 45, 3, 2, 4, 7, 8, 12];

const searchNr = (numbers, n) => {
    let search = numbers.filter((el) => { return el >= 10 })
    return console.log(search)
}

searchNr(numbers)

// 4.6 Declarați un array de numere și sortați-l în ordine crescătoare.
let numerele= [2, 3, 4, 6, 5, 7, 8, 1, 0, 12, 23, 43, 21, 25, 33]
num.sort((a, b) => { return a - b })
console.log(numerele);


// 4.7 Scrieți un program care primește un array de numere și returnează un nou array cu
//  pătratele fiecărui număr, utilizând funcția map.

let patratulNr = num.map(nums => nums ** 2)
console.log(patratulNr)

// 4.8 Calculați suma elementelor dintr-un array folosind funcția reduce.

let sumaELArr = num.reduce((acc, curentVal) => { return acc + curentVal })
console.log(sumaELArr);

// 4.9 Verificați dacă un anumit element există într-un array 
// folosind includes și indexOf.

console.log(num.includes(5))

console.log(num.indexOf(43))

// 4.10 Combinați două array-uri de cuvinte într-unul singur folosind 
// concat sau operatorul spread (...).

let cuvinte = ["Limba Romana"];
let cuvinte1 = ["Limba Franceza"];
let rezultat = [...cuvinte, ...cuvinte1]
console.log(rezultat)

let rezultat2 = cuvinte.concat(cuvinte1)
console.log(rezultat2)

// 4.11 Declarați un array bidimensional pentru o matrice 2x2 
// și accesați elementul de pe linia 1, coloana 2.

const matrice = [
    [1, 2],
    [3, 4]
]
console.log(matrice[0][1]);

// 4.12 Scrieți o funcție care elimină elementele duplicate dintr-un 
// array.
let eliminaDublicate = [0, 0, 1, 2, 2, 3, 3, 4, 5, 5, 4, 6, 7];

let elimina = [... new Set(eliminaDublicate)];

console.log(elimina);

// 4.13 Folosiți slice pentru a crea un sub-array și splice
//  pentru a elimina elementul cu indexul 2.
let cuvint = ['Om', 'Fiinta', 'Organism', 'Viata'];
let subArray = cuvint.slice(1, 3)
let spliceText = cuvint.splice(2, 1)

console.log(subArray)
console.log(spliceText)

// // 5. Manipulări DOM

// // 5.1 Selectați un element <h1> dintr-un
// document HTML folosind getElementById și schimbați textul acestuia.
const h1El = document.getElementById("h1Tag");
h1El.textContent = 'Am schimbat textul Task 5.1'


// // 5.2 Selectați toate elementele <li> dintr-un document folosind
// querySelectorAll și schimbați culoarea textului.

const liElements = document.querySelectorAll('li');
liElements.forEach(li => {
    li.style.color = "blue";
})

// // 5.3 Creați un element <p>, adăugați un text în acesta
// // și introduceți-l la sfârșitul unui element <div> cu ID-ul container.

const container = document.getElementById("container");
container.insertAdjacentHTML("beforeend", '<p> 5.3 Paragraf cu Text </p>');

// 5.4 Selectați o imagine și schimbați valoarea atributului src.
const img = document.getElementById("image");
img.src = "https://picsum.photos/seed/picsum/200/300";

// 5.5 Adăugați o clasă nouă unui element cu ID-ul box.

const box = document.getElementById("box")
box.classList.add("classBox");
// 5.6 Eliminați un element <p> dintr-un document.

const del = document.getElementById("del");
del.remove();

// 5.7 Adăugați un eveniment click unui buton,
// astfel încât să schimbe textul unui <h2> când este apăsat.

const h2 = document.getElementById("txt");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    h2.textContent = "Textul este schimbat Task 5.7";
})

// 5.8 Monitorizați un câmp de text și afișați mai
// jos conținutul acestuia într-un paragraf în timp real.

const input = document.getElementById("text");
const p = document.getElementById("afiseaza");

input.addEventListener("input", () => {
    p.textContent = input.value;
})

// 5.9 Selectați un element <ul> și afișați textul primului și ultimului copil.

// ----

// 5.10 Alternați o clasă active pe un element atunci când este 
// apăsat un buton.

const paragraf = document.getElementById("togleClass");
const btn1 = document.getElementById("btn-togle");
btn1.addEventListener("click", () => {
    paragraf.classList.add("classActive");
})
// 5.11 Creați dinamic un tabel HTML cu 3 rânduri și 2 coloane.
// ----

// 5.12 Creați o listă <ul> și adăugați
// elemente noi la apăsarea unui buton.

const list = document.getElementById("list")
const btnADD = document.getElementById("add-in-list")
btnADD.addEventListener("click", () => {
    list.insertAdjacentHTML("beforeend", "<li></li>")
})


// 6. Programare Asincronă

// 6.1 Scrieți un program care afișează un mesaj în consolă după 3 secunde.

    setTimeout(() => {
        console.log("Salut eu am utilizat un setTimeout.")
    }, 3000)
// 6.2 Creați un cronometru care afișează numere de la 1 la 5, câte unul pe secundă, și apoi se oprește.
let num = 1;

let cronometru = setInterval(() => {
    console.log(num);

    if (num === 5) {
        clearInterval(cronometru)
    }
    num++
}, 1000)

// 6.3 Scrieți o funcție salut care primește un callback
//     (altă funcție ca parametru) și îl apelează după ce afișează un mesaj.

const salut = (collback) => {
    console.log("Salut !!!")
    collback()
}
salut(() => console.log("Saluuut!!!!!!"))
// 6.4 Creați o funcție care returnează un Promise ce se rezolvă după 2 secunde.
const returneazaPromise = () => {
    return new Promise((executa) => {
        setTimeout(() => {
            executa("Sa executat functia!!!")
        }, 2000)
    })
}
returneazaPromise().then((mesaj) => {
    console.log(mesaj)
})


// 6.5 Creați o funcție care returnează un Promise ce poate fi respinsă sau rezolvată 
// în funcție de valoarea unui parametru.
const functieP = (conditie) => {
    return new Promise((rezolva, respinge) => {
        if (conditie) {
            rezolva("Sa rezolvat cu succes")
        } else {
            respinge("A fost respins.")
        }
    })
}
functieP(true).then(rezultat => console.log(rezultat)).catch(eroare => console.log(eroare))
// 6.6 Scrieți o funcție asincronă care apelează fucția
//  de la punctul 7.4 și afișează rezultatul.


async function afiseazaRezultatul() {
    const rezultatAsync = await salutare(" Cristina")
    console.log(rezultatAsync)
}
afiseazaRezultatul()
// 6.7 Creați trei funcții care returnează promisiuni și apelează-le în lanț.
function functiaUnu() {
    return Promise.resolve("\n Prima treapta")
}
function functiaDoi(date) {
    return Promise.resolve(date + "\n A doua treapta")
}
function functiaTrei(date) {
    return Promise.resolve(date + " \nA treia treapta")
}
functiaUnu()
    .then(raspuns1 => functiaDoi(raspuns1))
    .then(raspuns2 => functiaTrei(raspuns2))
    .then(ultimulRaspuns => console.log(ultimulRaspuns))

// 6.8 Utilizați fetch pentru a prelua date de la o API publică
//  (de exemplu, JSONPlaceholder https://jsonplaceholder.typicode.com/guide/) și afișați rezultatele.
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(raspuns => raspuns.json())
    .then(date => console.log("Date primite de la API:", date))
    .catch(eroare => console.log("A apărut o eroare:", eroare));
// 6.9 Folosiți Promise.all și Promise.allSettled pentru a aștepta rezolvarea mai multor promisiuni.

// ------

// 7. Module ES

// 7.1 În fișierul mathUtils.js exportați două funcții simple pentru operații matematice: adunare și scădere.
console.log('Adunarea intre doua numere ', adunarea(10, 10))
console.log('Scaderea a  doua numere ', scaderea(10, 5))

// 7.2 În fișierul main.js importați funcțiile și folosiți-le pentru a calcula suma și diferența a două numere.
const sumaNumere = adunarea(20, 20);
const diferenta = scaderea(40, 10)
console.log(sumaNumere)
console.log(diferenta)
// 7.3 În fișierul salutari.js exportați implicit o funcție care afișează un mesaj de salut.


// 7.4 În fișierul main.js importați funcția cu un nume ales de utilizator și folosiți-o pentru a saluta un utilizator.

// 7.5 În fișierul dateUtilizator.js exportați mai multe valori.
console.log('Date despre utilizator : ', date.nume, date.prenume, date.anCurent, date.oras)
// 7.6 În fișierul main.js importați întregul modul și accesați valorile exportate.