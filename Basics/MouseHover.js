// let abcd = document.querySelector("#abcd")

// abcd.addEventListener("mouseover", function () {
//     abcd.style.backgroundColor = "yellow";
// });

// abcd.addEventListener("mouseout", function () {
//     abcd.style.backgroundColor = "red";
// });

// document.querySelector("nav").addEventListener("click" , function() {
//     alert("NavBar Clicked!!!")
// })
 
// let ul = document.querySelector("ul")

// ul.addEventListener("click", function(dets) {
//     dets.target.classList.toggle("li");
// })

let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function() {
    span.textContent = inp.value.length
    console.log(inp.value.length);
})