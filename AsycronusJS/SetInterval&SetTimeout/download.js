let progress = document.querySelector(".progress-bar")

let count = 0;
let interval = setInterval(function() {
    if (count <= 99) {
        count++;
        console.log(count);
        progress.style.width = `${count}%`;
        document.querySelector("#progressText").textContent=`${count}%`;
    } else {
        document.querySelector("#downloadBtn").textContent = "Downloaded!"
        clearInterval(interval);
    }
}, 10000/100);