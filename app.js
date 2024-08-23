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

function mine() {
    diamonds = diamonds + minePower;
    drawDiamonds()
}

function drawDiamonds() {
    let diamondsElem = document.getElementById('diamonds')
    diamondsElem.innerText = `${diamonds}`

}

function addPickaxe() {
    if (diamonds >= clickUpgrades[0].price) {
        diamonds -= clickUpgrades[0].price;
        clickUpgrades[0].quantity += 1;
        console.log(`you have ${clickUpgrades[0].quantity} pickaxes`)
        drawDiamonds()
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
        drawDiamonds()
    }
    else {
        alert(`not enough diamonds! You need ${clickUpgrades[1].price - diamonds} more for a drill!`)
    }
}

function calcMinePower() {
    minePower = clickUpgrades[0].quantity + (clickUpgrades[1].quantity * 10)
    console.log(minePower)
}

// right now, calcMinePower works with console log, but if it is invoked at the bottom or within the mine function it breaks, we need to either replace mine() with the power or figure out how to integrate the two
// per mick, there needs to be a function that calculates the mining strength (right now it is calcMinePower), adding/multiplying by quantity, and then a separate function that utilizes it (mine())
