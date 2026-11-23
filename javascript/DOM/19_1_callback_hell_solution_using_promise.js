// zomato application
const orderDetail = {
    orderId: 12345,
    food : ["Pizza","Burger","coke"],
    cost : 500,
    customer_name : "Prem",
    customer_location : "Dwarka",
    restaurant_location : "Delhi"

}

function placeOrder(orderDetail){
    console.log(`${orderDetail.cost} payment is in progress`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.1){
                console.log("payment is received and order get placed");
                orderDetail.status = true;
                resolve(orderDetail);
            }
            else{
                reject("Payment failed")
            }
        },3000)
    });
    
}

function preparingOrder(orderDetail){
    console.log(`Your food preparaton started of ${orderDetail.food} `);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("order is prepared and ready to deliver");
        orderDetail.token = 123;
        resolve(orderDetail);
    },3000)
    })
}

function pickupOrder(orderDetail){
console.log(`delivery boy is on the way to pickup the order from ${orderDetail.restaurant_location}`);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("delivery boy has picked up the order and on the way to deliver");
        orderDetail.received = true;
        resolve(orderDetail);
    },3000)
    })
    
}

function deliverOrder(orderDetail){
    console.log(`delivery boy is on the way to deliver the order ${orderDetail.food} to ${orderDetail.customer_location}`);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("order is delivered");
        orderDetail.delivered = true;
        resolve(orderDetail);
    },3000)
    })
    
}

placeOrder(orderDetail)
.then((orderDetail)=>
    preparingOrder(orderDetail)
)
.then((orderDetail)=>
    pickupOrder(orderDetail)
)  
.then((orderDetail)=>
    deliverOrder(orderDetail)
)
.then((orderDetail)=>
    console.log(orderDetail)
)
.catch((error)=>{
    console.log("Error: ",error.message)
})
.finally(()=>{
    console.log("Thank you for ordering from Zomato")
}


// implicit and explicit return in promise using {}







// placeOrder(orderDetail);
// preparingOrder(orderDetail);
// pickupOrder(orderDetail);
// deliverOrder(orderDetail);