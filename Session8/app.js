// fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
let callApi = async () => {
    try {
        let api = await fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
        let dataConverted = await api.json()
        console.log(dataConverted);
    } catch (error){
        console.log(error)
    }
}

let arrayCar = ["t","r","a","e"]

// for (let i = 0; i < arrayCar.length; i++){
//     console.log(arrayCar[i])
// }

arrayCar.map((car,i) => console.log(car, i));

arrayCar.map(loopCar)

function loopCar(car, i){
    console.log(car, i)
}

let smartPhone = [
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
]

smartPhone.map(getPrice)

 function getPrice(item) {
    console.log(item.price)
}

let priceList = smartPhone.map(element => element.price)
console.log(priceList)

let foo = (x, y, z) => {
    console.log(x, y, z);
}

let foo2 = () => {alert('Hello')}