function createToaster(config) {
    return function(str) {
        const parent = document.querySelector(".parent");

        const div = document.createElement("div");

        div.className =
            "inline-block bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity duration-300";

        div.textContent = str;

        parent.appendChild(div);
        setTimeout(() => {
            parent.removeChild(div);
        }, config.duration * 1000);
    };
}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 1,
});

toaster("It's Nit ")
setTimeout(()=>{
    toaster("it's been while")
}, 1000);

// let obj = {
//     name : "nit",
//     age : "age",
//     address :() => {
//         console.log(this);
//     }
// }

// function info() {
//     console.log(this);
// }


// info()
// obj.address();
// console.log("hey")