let diamonds = 0
let minePower = 1

let clickUpgrades = [
    {
        name: 'Pickaxe',
        price: 50,
        quantity: 0,
        multiplier: 1
    },
    {
        name: 'Drill',
        price: 250,
        quantity: 0,
        multiplier: 5
    }
]

let automaticUpgrades = [
    {
        name: 'Dwarf',
        price: 1000,
        quantity: 0,
        multiplier: 10
    },
    {
        name: 'Mine Cart',
        price: 50000,
        quantity: 0,
        multiplier: 20
    }

]
// this function should run calcMinePower to get total bonus/multipliers 
function mine() {
    diamonds = diamonds + minePower;
    drawDiamonds()
}

function drawDiamonds() {
    let diamondsElem = document.getElementById('diamonds')
    diamondsElem.innerText = `${diamonds}`
}

function drawMinePower() {
    let minePowerElem = document.getElementById('minePower')
    minePowerElem.innerText = `${minePower}`
}

function drawAutoPower() {
    let autoPowerElem = document.getElementById('autoPower')
    autoPowerElem.innerText = `${(automaticUpgrades[0].quantity * 100) + (automaticUpgrades[1].quantity * 1000)}`
}
// the price of these upgrades needs to increase with each purchase 
function addPickaxe() {
    if (diamonds >= clickUpgrades[0].price) {
        diamonds -= clickUpgrades[0].price;
        clickUpgrades[0].quantity += 1;
        //console.log(`you have ${clickUpgrades[0].quantity} pickaxes`)
        let pickaxeQuantityElem = document.getElementById('pickaxeQuantity')
        pickaxeQuantityElem.innerText = `${clickUpgrades[0].quantity}`
        let pickaxePowerElem = document.getElementById('pickaxePower')
        pickaxePowerElem.innerText = `${clickUpgrades[0].quantity}`
        drawDiamonds()
        calcMinePower()
        drawMinePower()
    }
    else {
        alert(`not enough diamonds! You need ${clickUpgrades[0].price - diamonds} more for a pickaxe!`)
    }
}

function addDrill() {
    if (diamonds >= clickUpgrades[1].price) {
        diamonds -= clickUpgrades[1].price;
        clickUpgrades[1].quantity += 1;
        console.log(`you have ${clickUpgrades[1].quantity} drills`)
        let drillQuantityElem = document.getElementById('drillQuantity')
        drillQuantityElem.innerText = `${clickUpgrades[1].quantity}`
        let drillPowerElem = document.getElementById('drillPower')
        drillPowerElem.innerText = `${(clickUpgrades[1].quantity * 10)}`
        drawDiamonds()
        calcMinePower()
        drawMinePower()
    }
    else {
        alert(`not enough diamonds! You need ${clickUpgrades[1].price - diamonds} more for a drill!`)
    }
}

function dwarfBonus() {
    if (automaticUpgrades[0].quantity >= 1) {
        diamonds += (100 * automaticUpgrades[0].quantity)
        drawDiamonds()
    }
}

function mineCartBonus() {
    if (automaticUpgrades[1].quantity >= 1) {
        diamonds += (1000 * automaticUpgrades[1].quantity)
        drawDiamonds()
    }
}

function addDwarf() {
    if (diamonds >= automaticUpgrades[0].price) {
        diamonds -= automaticUpgrades[0].price;
        automaticUpgrades[0].quantity++;
        console.log(`you have ${automaticUpgrades[0].quantity} Dwarves helping out!`)
        drawDiamonds()
        calcMinePower()
        drawAutoPower()
    }
    else {
        alert(`not enough diamonds! you need ${automaticUpgrades[0].price - diamonds} more to hire another Dwarf!`)
    }
}

function addMineCart() {
    if (diamonds >= automaticUpgrades[1].price) {
        diamonds -= automaticUpgrades[1].price;
        automaticUpgrades[1].quantity++;
        console.log(`you have ${automaticUpgrades[1].quantity} Mine Carts`)
        drawDiamonds()
        calcMinePower()
        drawAutoPower()
    }
    else {
        alert(`not enough diamonds! you need ${automaticUpgrades[1].price - diamonds} more for a mine cart`)
    }
}


// this should return the value so it can be used above in mine() function
function calcMinePower() {
    minePower = 1 + clickUpgrades[0].quantity + (clickUpgrades[1].quantity * 10)
    console.log(minePower)
}




setInterval(dwarfBonus, 3000)
setInterval(mineCartBonus, 3000)
// right now, calcMinePower works with console log, but if it is invoked at the bottom or within the mine function it breaks, we need to either replace mine() with the power or figure out how to integrate the two
// per mick, there needs to be a function that calculates the mining strength (right now it is calcMinePower), adding/multiplying by quantity, and then a separate function that utilizes it (mine())
