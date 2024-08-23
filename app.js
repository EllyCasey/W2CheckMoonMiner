let diamonds = 0

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
    diamonds += 1;
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
        console.log(clickUpgrades[0].quantity)
        drawDiamonds()
    }
}
