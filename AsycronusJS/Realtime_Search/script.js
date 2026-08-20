const users = [
  {
    name: "amisha rathore",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=736&auto=format&fit=crop",
    bio: "silent chaos in a loud world 😂 | not for everyone",
  },
  {
    name: "kiara mehta",
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=736&auto=format&fit=crop",
    bio: "main character energy 🍴 | coffee > everything 🍴🍴",
  },
  {
    name: "arjun singh",
    pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=736&auto=format&fit=crop",
    bio: "gym rat 🏋️ | protein shake enthusiast | 2% body fat",
  },
  {
    name: "priya sharma",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=736&auto=format&fit=crop",
    bio: "bookworm 📚 | tea over coffee | introvert but loud with friends",
  },
  {
    name: "prija raj",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=736&auto=format&fit=crop",
    bio: "tech geek 💻 | code, sleep, repeat | building the future",
  },
  {
    name: "neha kapoor",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=736&auto=format&fit=crop",
    bio: "travel addict ✈️ | 25 countries and counting | wanderlust",
  },
  {
    name: "rahul verma",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=736&auto=format&fit=crop",
    bio: "foodie 🍕 | biryani is life | restaurant hopper",
  },
  {
    name: "sneha patel",
    pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=736&auto=format&fit=crop",
    bio: "artist 🎨 | painting my emotions | creativity overdose",
  },
  {
    name: "karan joshi",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=736&auto=format&fit=crop",
    bio: "music producer 🎵 | beats that hit hard | studio rat",
  },
];


// Select the HTML container
const container = document.querySelector(".container");

function ShowUsers(arr) {
    arr.forEach(function (user) {
            // Create card container
            const card = document.createElement('div');
            card.className = 'card';

            // Create image element
            const img = document.createElement('img');
            img.src = user.pic;
            img.className = 'bg-img';
            img.alt = `${user.name}'s profile picture`;

            // Create blurred layer
            const blurredLayer = document.createElement('div');
            blurredLayer.style.backgroundImage = `url(${user.pic})`;
            blurredLayer.className = 'blurred-layer';

            // Create content container
            const content = document.createElement('div');
            content.className = 'content';

            // Create heading (name)
            const h3 = document.createElement('h3');
            h3.textContent = user.name;

            // Create paragraph (bio)
            const p = document.createElement('p');
            p.textContent = user.bio;

            // Assemble the card
            content.appendChild(h3);
            content.appendChild(p);
            card.appendChild(img);
            card.appendChild(blurredLayer);
            card.appendChild(content);

            container.appendChild(card);
    })
}


let inp = document.querySelector(".inp");

// inp.addEventListener("input", function() {
//   let newUsers = users.filter((user) => {
//     return user.name.startsWith(inp.value);
//   });

//   //document.querySelector(".card").innerHTML= "";
//   ShowUsers(newUsers);
// })
inp.addEventListener("input", function () {

    const searchValue = inp.value.toLowerCase().trim();

    // If input is empty, remove all cards
    if (searchValue === "") {
        container.innerHTML = "";
        return;
    }

    const newUsers = users.filter(function (user) {
        return user.name.toLowerCase().startsWith(searchValue);
    });

    ShowUsers(newUsers);
});
