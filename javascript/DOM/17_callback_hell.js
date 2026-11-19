// zomato application
const orderDetail = {
    orderId: 12345,
    food : ["Pizza","Burger","coke"],
    cost : 500,
    customer_name : "Prem",
    customer_location : "Dwarka",
    restaurant_location : "Delhi"

}

function placeOrder(orderDetail,Callback){
    console.log(`${orderDetail.cost} payment is in progress`);

    setTimeout(()=>{
        console.log("payment is received and order get placed");
        orderDetail.status = true;
        Callback(orderDetail);
    },3000)
}

function preparingOrder(orderDetail,Callback){
    console.log(`Your food preparaton started of ${orderDetail.food} `);

    setTimeout(()=>{
        console.log("order is prepared and ready to deliver");
        orderDetail.token = 123;
        Callback(orderDetail);
    },3000)
}

function pickupOrder(orderDetail,Callback){
console.log(`delivery boy is on the way to pickup the order from ${orderDetail.restaurant_location}`);

    setTimeout(()=>{
        console.log("delivery boy has picked up the order and on the way to deliver");
        orderDetail.received = true;
        Callback(orderDetail);
    },3000)
}

function deliverOrder(orderDetail){
    console.log(`delivery boy is on the way to deliver the order ${orderDetail.food} to ${orderDetail.customer_location}`);

    setTimeout(()=>{
        console.log("order is delivered");
        orderDetail.delivered = true;
    },3000)
}

// placeOrder(orderDetail,()=>{
//     preparingOrder();
// })

// placeOrder(preparingOrder(pickupOrder));
// preparingOrder();

placeOrder(orderDetail,(orderDetail)=>{
    preparingOrder(orderDetail, (orderDetail) => {
        pickupOrder(orderDetail,(orderDetail)=>{
            deliverOrder(orderDetail);
        })
    })
})

// above function is same as 
// const callback = ()=>{
//     preparingOrder();
// }