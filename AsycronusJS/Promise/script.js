let pro = new Promise((resolve, reject) => {
   setTimeout(() => {
        let num = Math.floor(Math.random() * 10);
        if(num > 5) {
            resolve("Resolved: " + num);
        } else {
            reject("Rejected: " + num);
        }
   }, 3000); 
});

pro.then(function(value) {
    console.log(value);
    console.log("Promise resolved successfully");
}).catch(function(error) {
    console.log(error);
    console.log("Promise rejected");
});