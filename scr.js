/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  const title = document.getElementsByTagName("h1");
  console.log(title);
  title[0].innerText = "Il titolo del primo es";
};

changeTitle();
/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function () {
  const title = document.getElementsByTagName("h1");
  title[0].classList.add("myHeading");
  console.log(title[0]);
};

addClassToTitle();

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function () {
  const allPs = document.getElementsByTagName("p");
  console.log("sono es 3", allPs);

  const divChildsP = [];
  Array.from(allPs).forEach((p) => {
    console.log(p.parentElement.tagName);
    if (p.parentElement.tagName === "DIV") divChildsP.push(p);
  });
  divChildsP.forEach((p) => {
    p.innerText = "Ciao ho cambiato il testo";
  });
  console.log(typeof divChildsP);
};
changePcontent();

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function () {
  const allLinks = document.getElementsByTagName("a");
  console.log("sono es 4", allLinks);
  Array.from(allLinks).forEach((l) => {
    console.log(l.parentElement.tagName);

    if (l.parentElement.parentElement.tagName !== "FOOTER")
      l.setAttribute("href", "https://www.google.com");
    console.log(l.getAttribute("href"));
  });
};

changeUrls();
/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function () {
  const list = document.getElementById("secondList");
  const newLi = document.createElement("li");
  newLi.innerText = "4th";
  list.appendChild(newLi);

  console.log(list);
};
addToTheSecond();
/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function () {
  const newP = document.createElement("p");
  newP.innerText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const firstDiv = document.querySelector("div");
  console.log(firstDiv);
  firstDiv.appendChild(newP);
};
addParagraph();
/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
  const firstUL = document.getElementById("firstList");
  //   firstUL.style.visibility = "hidden";
  firstUL.remove();
};
hideFirstUl();
/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  const allUl = document.getElementsByTagName("ul");
  Array.from(allUl).forEach((ul) => (ul.style.backgroundColor = "green"));
};
paintItGreen();

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
const h1 = document.getElementsByTagName("h1")[0];
const makeItClickable = function () {
  console.log(h1.innerText);
  h1.innerText = h1.innerText.slice(0, -1);
};

h1.onclick = makeItClickable;

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
const footerA = document.querySelector("footer a");
console.log(footerA.href);
const revealFooterLink = function () {
  alert(footerA.href);
};
footerA.parentElement.parentElement.onclick = revealFooterLink;

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function () {
  const table = document.createElement("table");
  const divTable = document.getElementById("tableArea");
  divTable.appendChild(table);
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  table.appendChild(thead);
  table.appendChild(tbody);
  const rowHead = document.createElement("tr");
  const row1 = document.createElement("tr");
  const row2 = document.createElement("tr");
  const row3 = document.createElement("tr");
  const row4 = document.createElement("tr");
  const row5 = document.createElement("tr");
  thead.appendChild(rowHead);
  tbody.appendChild(row1);
  tbody.appendChild(row3);
  tbody.appendChild(row3);
  tbody.appendChild(row4);
  tbody.appendChild(row5);
  const th1Thead = document.createElement("th");
  const th2Thead = document.createElement("th");
  const th3Thead = document.createElement("th");
  const th4Thead = document.createElement("th");
  const td1FirstRow = document.createElement("td");
  const td2FirstRow = document.createElement("td");
  const td3FirstRow = document.createElement("td");
  const td4FirstRow = document.createElement("td");
  const td1SecondRow = document.createElement("td");
  const td2SecondRow = document.createElement("td");
  const td3SecondRow = document.createElement("td");
  const td4SecondRow = document.createElement("td");
  const td1ThirdRow = document.createElement("td");
  const td2ThirdRow = document.createElement("td");
  const td3ThirdRow = document.createElement("td");
  const td4ThirdRow = document.createElement("td");
  const td1FourthRow = document.createElement("td");
  const td2FourthRow = document.createElement("td");
  const td3FourthRow = document.createElement("td");
  const td4FourthRow = document.createElement("td");
  const td1FifthRow = document.createElement("td");
  const td2FifthRow = document.createElement("td");
  const td3FifthRow = document.createElement("td");
  const td4FifthRow = document.createElement("td");
  rowHead.append(th1Thead);
  rowHead.append(th2Thead);
  rowHead.append(th3Thead);
  rowHead.append(th4Thead);
  th1Thead.innerText = "immagine";
  th2Thead.innerText = "nome prodotto";
  th3Thead.innerText = "quantità";
  th4Thead.innerText = "prezzo";
  row1.append(td1FirstRow);
  row1.append(td2FirstRow);
  row1.append(td3FirstRow);
  row1.append(td4FirstRow);
  row2.append(td1SecondRow);
  row2.append(td2SecondRow);
  row2.append(td3SecondRow);
  row2.append(td4SecondRow);
  row3.append(td1ThirdRow);
  row3.append(td2ThirdRow);
  row3.append(td3ThirdRow);
  row3.append(td4ThirdRow);
  row4.append(td1FourthRow);
  row4.append(td2FourthRow);
  row4.append(td3FourthRow);
  row4.append(td4FourthRow);
  row5.append(td1FifthRow);
  row5.append(td2FifthRow);
  row5.append(td3FifthRow);
  row5.append(td4FifthRow);
};
generateTable();

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {};

/* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */

const deleteVowels = function () {};
