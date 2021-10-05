const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// const totalBatteries = batteryBatches.reduce(function(total, batteryBatch){
//     return total + batteryBatch;
// }, 0);


// rewrite about function to arrow function
const totalBatteries = batteryBatches.reduce((total, batteryBatch) => total + batteryBatch, 0);
