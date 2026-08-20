async function getUsers() {
    try {

        document.querySelector("#users-container").innerHTML = "";

        const response = await fetch("https://randomuser.me/api/?results=4");
        const data = await response.json();
        data.results.forEach(function(user) {
        //article
        const article = document.createElement("article");
        article.classList.add("user-card");

        // image
        const img = document.createElement("img");
        img.src = user.picture.large;
        img.alt = "Profile picture of " + user.name.first + " " + user.name.last;

        //heading
        const h2 = document.createElement("h2");
        h2.textContent = user.name.first + " " + user.name.last;

        //email paragraph
        const email = document.createElement("p");

        const emailStrong = document.createElement("strong");
        emailStrong.textContent = user.email;

        email.appendChild(emailStrong);

        // location paragraph
        const location = document.createElement("p");

        const locationStrong = document.createElement("strong");
        locationStrong.textContent = user.location.city + ", " + user.location.country;

        location.appendChild(locationStrong);

        // Add 
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(email);
        article.appendChild(location);

        // Add article
        document.querySelector("#users-container").appendChild(article);
    })

    }catch (err) {
        console.error("Error fetching users:", err);
    }
}

getUsers();

let refreshBtn = document.querySelector("#refresh-button");
refreshBtn.addEventListener("click", function() {
    getUsers();
})



// fetch("https://randomuser.me/api/").then(function(response) {
//     return response.json();
// }).then(function(data) {
//     data.results.forEach(function(user) {
//         // Create article
//         const article = document.createElement("article");
//         article.classList.add("user-card");

//         // Create image
//         const img = document.createElement("img");
//         img.src = user.picture.large;
//         img.alt = "Profile picture of " + user.name.first + " " + user.name.last;

//         // Create heading
//         const h2 = document.createElement("h2");
//         h2.textContent = user.name.first + " " + user.name.last;

//         // Create email paragraph
//         const email = document.createElement("p");

//         const emailStrong = document.createElement("strong");
//         emailStrong.textContent = user.email;

//         email.appendChild(emailStrong);

//         // Create location paragraph
//         const location = document.createElement("p");

//         const locationStrong = document.createElement("strong");
//         locationStrong.textContent = user.location.city + ", " + user.location.country;

//         location.appendChild(locationStrong);

//         // Add everything to article
//         article.appendChild(img);
//         article.appendChild(h2);
//         article.appendChild(email);
//         article.appendChild(location);

//         // Add article to body
//         document.querySelector("#users-container").appendChild(article);
//     })
// });