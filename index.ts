

const menu = [

    { name: "margarita", price: 200 },
    { name: "pepperoni", price: 200 },
    { name: "bbq", price: 200 },
    { name: "hawaian", price: 200 }

]

const cashInRegister = 1300
const nextOrderId = 1
const orderQueue = []

function addNewPizza(pizzaObj){
    menu.push(pizzaObj)
}

function placeOrder(pizzaName){
    const seletedPizza  = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += seletedPizza.price
    const newOrder = { id: nextOrderId++, pizza: seletedPizza, status: "ordered"}
    orderQueue.push(newOrder)
    return newOrder

}

function completeOrder(orderId){
    const order = orderQueue.find(order => orderId === orderId)
    order.status = "completed"
    return order

}

    addNewPizza({ name: "margarita", price: 200})
    addNewPizza({ name: "pepperoni", price: 200})