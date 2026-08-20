// Callback function example
// Function takes a other function as an argument so that that other function called as Callback function

function printMessage(func, timeout) {
    console.log("This message is printed immediately.");
    setTimeout(func, timeout * 1000);
}

let message = "This message is printed after 2 seconds.";
printMessage(function() {
    console.log(message);
}, 2)
