const grenadeObject = [
    {
      picture: "https://www.bungie.net/common/destiny2_content/icons/004dc00b44da7351baab210b2061d3ca.jpg",
      name: "Grenade laser",
      description: "Cette grenade se colle aux surfaces et explose quand des cibles passent à proximité de son amorce laser, infligeant des dégâts et des Blessures solaires modérées.",
  },
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/e3d95f3eaba5b9c1ef795b10dc096b5a.jpg",
      name: "Grenade incendiaire",
      description: "Une grenade à l'explosion enflammée qui inflige des Blessures solaires lourdes aux cibles proches."
  },
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/b3bcabb4c6f5d4e210a832ea92c5da66.jpg",
      name: "Grenade solaire",
      description: "Cette grenade crée un feu de Lumière solaire qui inflige des dégâts continus et des Blessures solaires aux ennemis pris à l'intérieur."
  },    
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/d9d4237a75d02a37eb3c1a72795eb77c.jpg",
      name: "Grenade à essaim",
      description: "Cette grenade explose à l'impact et libère des drones qui poursuivent les cibles proches. Chaque drone inflige aux cibles touchées des Blessures solaires légères."
  },
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/18b417aa16f3472a02db57943383ef1c.jpg",
      name: "Grenade à fusion",
      description: "Cette grenade explosive s'accroche aux cibles, elle leur inflige des dégâts et des Blessures solaires modérées à l'explosion."
  },    
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/aa1f8d3a4ed11906061872beef20cefe.jpg",
      name: "Grenade à décharges",
      description: "Cette grenade libère des décharges de Lumière solaire sur les cibles proches et leur inflige des Blessures solaires légères."
  },    
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/35824c115235240b6889fe523448fb10.jpg",
      name: "Grenade de soin",
      description: "Cette grenade soigne les alliés à l'impact, crée un orbe de Lumière solaire bienfaisante, qui octroie Restauration aux alliés quand il est ramassé."
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
