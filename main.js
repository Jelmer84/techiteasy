// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];


const  arrayTvsStillToSell = inventory.map((inventory) => {
  return inventory.originalStock - inventory.sold
})
const tvsStillToSell = arrayTvsStillToSell.reduce (function (total, value) {
  return total + value
});
// console.log(tvsStillToSell)

const numbertoSell = document.getElementById("numberStillToSell")
numbertoSell.textContent = tvsStillToSell

// Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.
// MAP -> [{}, {}, {}] -> ['fancy samsung', 'fancier samsung', 'lg big screen']
// - [ ] maak variabele voor de uitkomst
// - [ ] inventory.map()
// - [ ] geef een functie aan map als argument
// - [ ] voeg de parameter toe (televisie, product)
// - [ ] zoeken naar de juiste property
// - [ ] return de juiste property
// - [ ] log het resultaat

// Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
// FILTER -> [{}, {}, {}, {}] -> [{}, {}]
// - [ ] maak variabele voor de uitkomst
// - [ ] inventory.filter()
// - [ ] geef een functie aan map als argument
// - [ ] voeg de parameter toe (televisie, product)
// - [ ] zoeken naar de juiste property
// - [ ] check: is de televisie uitverkocht? true of false
// - [ ] return true of false
// - [ ] log het resultaat

// Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
// FILTER -> [{}, {}, {}, {}] -> [{}, {}]

// Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
// SORT

// 3 ==============================================================================================
// Opdracht 3a: Wat is onze doel-opbrengst?
// Bereken wat de totale opbrengst is, als we
// alle exemplaren van ieder type zouden verkopen.
// Geef dit in het blauw weer op de pagina.

// STRATEGIE:
// MAYBE (tussenstap): MAP [{}, {}, {}, {}, {}, {}, {}, {}] -> [8717, 636, (nog 6 uitkomsten)]
// NOPE: FIND [{}, {}, {}, {}] -> {}
// NOPE: FILTER (we moeten alles doen, dus geen filter nodig)
// NOPE: SORT (volgorde)
// Iets anders (loop)

// 1. MAP -> LOOP
// - MAP -> [8717, 636, (nog 6 uitkomsten)]
// - LOOP [8717, 636, (nog 6 uitkomsten)] -> eindbedrag

// 2. 1 x LOOPEN
// - counter (totaalbedrag)
// - LOOP
// - Voor elke type: originalStock * price
// - optellen bij het totaal bedrag

// VOOR DE TODOLIST: check opdracht 1 (lijkt heel erg)

// OP DE PAGINA ZETTEN:

// - Zelfde als 1B
// - [ ] element maken (html)
// - [ ] id moeten voegen (html)
// - [ ] Het element selecteren (variabele / getElementById)
// - [ ] De content veranderen (.textContent)
// - [ ] Kleurtje geven (CSS)

