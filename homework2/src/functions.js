function addToCart(quantity, productName="Elma"){
console.log("sepete eklendi: ürün: " + productName + " adet:" +quantity)
}

//addToCart() //undefined
addToCart(10)
//addToCart(15)

//arrow function
let sayHello = () => {
    console.log("Hello World")
}
sayHello()


let sayHello2 = function (){
    console.log("Hello World2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice){

}
addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

let product1={productName:"Elma", unitPrice:10, quantity:3}
function addToCart3(product){
console.log("Ürün: "+ product.productName)
console.log("Adet: "+ product.quantity)
console.log("Fiyat: "+ product.unitPrice)
}
addToCart3(product1)


//object referans tiptir.
let product2={productName:"Elma", unitPrice:10, quantity:3}
let product3={productName:"Elma", unitPrice:10, quantity:3}
product2=product3
product2.productName="KARPUZ"
console.log(product3.productName) // KARPUZ 

let sayi1= 10;
let sayi2= 20;
sayi1 = sayi2
sayi2=100
console.log(sayi1)  //20

function addToCart4(products){
    console.log(products)
}

let products =[
    {productName:"Elma", unitPrice:10, quantity:3},
    {productName:"Armut", unitPrice:10, quantity:3},
    {productName:"Karpuz", unitPrice:10, quantity:3}
]
addToCart4(products)

function add(bisey, ...numbers){//rest
    let total=0
    for(let i=0; i<numbers.length; i++){
        total=total+ numbers[i]
    }
    console.log(total)
    console.log(bisey)
}
add(20,30)
//add(20,30,40)
//add(20,30, 40, 50)

let numbers=[30,10,500,600,120]
console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]

//console.log(icAnadolu.name)
//console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}= {productName:"Karpuz", unitPrice:10, quantity:3})
console.log(newProductName)

