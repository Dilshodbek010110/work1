let products = [
    {
        name: "yogurt",
        type: "milk",
        price: 8000
    },
    {
        name: "apple",
        type: "fruit",
        price: 10000
    },
    {
        name: "vodka",
        type: "alcohol",
        price: 74000
    },
    {
        name: "tvorog",
        type: "milk",
        price: 12000
    },
    {
        name: "smetana",
        type: "milk",
        price: 10000
    },
    {
        name: "banana",
        type: "fruit",
        price: 28000
    },
    {
        name: "juice",
        type: "fruit",
        price: 15000
    },
    {
        name: "konyak",
        type: "alcohol",
        price: 100000
    }
]


let categories = [
    {
        type: "milk",
        count: 0,
        arr: [],
        total: 0
    },
    {
        type: "fruit",
        count: 0,
        arr: [],
        total: 0
    },
    {
        type: "alcohol",
        count: 0,
        arr: [],
        total: 0
    }
]
let discount = prompt('1 - 100%')



for (let i = 0; i < products.length; i++) {

    let product = products[i];
    let category = categories.find(category => category.type === product.type);
    category.count ++
    category.arr.push(product);
    category.total +=product.price;
  }


  console.table(categories);


// create new key (total) and summorize all prices of this type product
//