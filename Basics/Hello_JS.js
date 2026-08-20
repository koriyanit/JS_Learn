// function walk( a ) {
//     console.log(`${a} Walk with lags`);
// }

// walk("horse")

//   function divide(a, b) {
//     return Math.abs(a / b)
//   }

//   console.log(divide(2, 3));
  

// function see(a, b, c, ...val) {
//     console.log(a, b, c, val);
    
// }

// see(1, 2, 3, 4, 5);   



// Closures  
    // function outerOne ( a ) {
    //     let b = 10
    //     return function innerOne() {
    //         console.log(a + b);
            
    //     }
    // }

    // const clouserFunction = outerOne(3);
    // clouserFunction();

    // function createAccount(initialBalance) {
    //     let balance = initialBalance;

    //     return {
    //         getBalance : function() {
    //             return balance;
                
    //         },
    //         deposit : function(amount) {
    //             return balance += amount;
    //         },
    //         withdraw : function(amount) {
    //             if (amount > balance)
    //                 console.log("Insufficient Balance for Withdraw");
                
    //             return balance -= amount;
    //         }
    //     }
    // }

    // const accout = createAccount(0)
    // console.log(accout.getBalance())
    // console.log(accout.deposit(100));
    // console.log(accout.withdraw(50));
    
    

    //###################################################################################
    //              IIFE – Immediately Invoked Function Expression    
    
    // (function () {
    //     console.log("Hello Nit ji")
    // })();

    // let multi = ((a, b)=> a*b)

    // console.log(multi(1,9));
    

    // function createCounter() {
    //     let count = 0;
    //     return function () {
    //         count++;
    //         console.log(count);
            
    //     };
    // }

    // const counter = createCounter();
    // counter();
    // counter();


    //#######################################################################################
    //                           Arrays

    // let mark = [18, 29, 29]
    // console.log(mark);

    // let arr = new Array();
    // arr =  [18, 29, 29, 34, 56, 443, 33]
    // //arr.unshift()
    // console.log(arr);
    
    // //console.log(arr.splice(0,3));
    // console.log(arr.slice(0, 3));

    // console.log(arr);

    

    


    
    
