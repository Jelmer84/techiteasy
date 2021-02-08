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

// 1a =================================================================
const  arrayTvsStillToSell = inventory.map((inventory) => {
  return inventory.originalStock - inventory.sold;
})
const tvsStillToSell = arrayTvsStillToSell.reduce (function (total, value) {
  return total + value;
});
console.log(tvsStillToSell);

// 1b =================================================================
const numbertoSell = document.getElementById("numberStillToSell")
numbertoSell.textContent = tvsStillToSell;

// 2a =================================================================
const arrayOfTV = inventory.map (function (television) {
  return `${television.brand} ${television.name}`;
})
console.log(arrayOfTV);

// 2b =================================================================
const soldOutTvs = inventory.filter (function (televison) {
  return (televison.originalStock === televison.sold)
})
console.log(soldOutTvs);

// 2c =================================================================
const tvWithAmbiLight = inventory.filter(function (television) {
  return television.options.ambiLight.valueOf(true);
})
console.log(tvWithAmbiLight);

// 2d =================================================================
const tvsInOrderOfPrice = inventory.sort(function (televisionA, televisionB) {
  return televisionA.price - televisionB.price;
})
console.log(tvsInOrderOfPrice);

// 3a =================================================================
const  arrayRevenueTarget = inventory.map((inventory) => {
  return inventory.originalStock * inventory.price;
})
const revenueTarget = arrayRevenueTarget.reduce (function (total, value) {
  return total + value;
});
console.log(revenueTarget);

const targetRevenue = document.getElementById("revenueTarget")
targetRevenue.textContent = "€ " + revenueTarget

// 3b =================================================================
const  arrayRevenueMade = inventory.map((inventory) => {
  return inventory.sold * inventory.price;
})
const revenueMade = arrayRevenueMade.reduce (function (total, value) {
  return total + value;
});
console.log(revenueMade);

const madeRevenue = document.getElementById("revenue")
madeRevenue.textContent = "€ " + revenueMade

// 4 ==================================================================
function diplayProducts (product) {
  const tvDisplay = document.createElement ("li");
  tvDisplay.setAttribute("class", "classListOfTvs")
  const tvType = product.type
  tvDisplay.textContent = tvType

  const list = document.getElementById("listOfTvs")
  list.appendChild(tvDisplay)
}

for (let index = 0; index < 2; index++) {
  const product = inventory[index]
  diplayProducts(product)
}

// 5a =================================================================
function tvNameString (tv) {
  const tvDisplay = document.createElement ("li");
  tvDisplay.setAttribute("class", "classListOfTvOne")
  const tvTypeOne = `${tv.brand} ${tv.type} - ${tv.name}`
  tvDisplay.textContent = tvTypeOne

  const list = document.getElementById("listOfTvOne")
  list.appendChild(tvDisplay)
}

for (let index = 0; index < inventory.length ; index++) {
  const product = inventory[index]
  tvNameString(product)
}





// const tvName = inventory.map(function (tv) {
//   return `${tv.brand} ${tv.type} - ${tv.name}`
// })
// console.log(tvName)

















// 8 ==================================================================
// Alle 8 Tv's'
// function diplayProducts (product) {
//   const tvDisplay = document.createElement ("li");
//   tvDisplay.setAttribute("class", "classListOfTvs")
//   const tvType = product.type
//   tvDisplay.textContent = tvType
//
//   const list = document.getElementById("listOfTvs")
//   list.appendChild(tvDisplay)
// }
//
// for (let index = 0; index < inventory.length ; index++) {
//   const product = inventory[index]
//   diplayProducts(product)
// }






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

