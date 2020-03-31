function orderSupplies(item, callback) {
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;
    setTimeout(() => {
    warehouse = {
    paint: {
        product: 'Neon Green Paint',
        directions: () => 'mix it!'
    },
    brush: {
        product: 'Horsehair brush',
        directions: () => 'start painting!'
    }
    };
    callback(warehouse[item]);
}, deliveryTime);
}
function receivedItem(item) {
console.log(`Received ${item.product}, time to ${item.directions()}`);
}
orderSupplies('brush', receivedItem);
orderSupplies('paint', receivedItem);


// Your goal for this challenge is to control the flow of information. No matter which order is prepared first we should always see the messages as such:
// Received Neon Green Paint, time to mix it!
// Received Horsehair brush, time to start painting!

// While working on this problem you should also consider if your solution allows for additional orders. If I add a tarp to this equation where does it fit in the sequence and how well does your solution accommodate change, or simply, does it scale?