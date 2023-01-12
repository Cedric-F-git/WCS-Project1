const grenadeObject = [
    {
      picture: "https://www.bungie.net/common/destiny2_content/icons/b4baaca576193defa185f59457b81de1.png",
      name: "Grenade à champ crépusculaire",
      description: "Une grenade qui se brise à l'impact et laisse derrière elle un champ qui ralentit les cibles et gèle celles qui n'en sortent pas.",
  },
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/9ccafe089fdec2002b18f5deb0ec4bf9.png",
      name: "Grenade à coup de froid",
      description: "Une grenade qui gèle à l'impact et envoie une sonde chercher et geler d'autres cibles."
  },
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/d9c632884b8b5cc0a3280c25a16c030e.png",
      name: "Grenade glaciaire",
      description: "Une grenade qui crée des murs à partir de cristaux de [Stase] stase afin de bloquer les dégâts et de geler les cibles. Ces murs peuvent être brisés pour infliger des dégâts."
  },    
];

const grenade = document.querySelector(".all-grenade");
const imageContainer = document.createElement("div");

grenadeObject.forEach((data, index) => {
  const greImg = document.createElement("img");
  greImg.classList.add("grenade-img");
  greImg.src = data.picture;
  greImg.alt = data.name;
  if (index !== 0) {
    greImg.style.filter = "grayscale(100%)";
  } else {
    greImg.style.filter = "";
  }

  greImg.addEventListener("click", () => {
    const allgreImg = imageContainer.querySelectorAll("img");

    allgreImg.forEach((otherImage, otherIndex) => {
      if (otherIndex !== index) {
        otherImage.style.filter = "grayscale(100%";
      }
    });

    greImg.style.filter = "";

    document.querySelector("#title").textContent = data.name;
    document.querySelector("#description").textContent = data.description;
  });

  imageContainer.appendChild(greImg);
});

grenade.appendChild(imageContainer);

const descriptionContainer = document.createElement("div");
descriptionContainer.classList.add("gre-container");
imageContainer.appendChild(descriptionContainer);

const titleElement = document.createElement("h4");
titleElement.id = "title";
descriptionContainer.appendChild(titleElement);

const descriptionElement = document.createElement("p");
descriptionElement.id = "description";
descriptionContainer.appendChild(descriptionElement);

document.querySelector("#title").textContent = grenadeObject[0].name;
document.querySelector("#description").textContent = grenadeObject[0].description;