const grenadeObject = [
    {
      picture: "https://www.bungie.net/common/destiny2_content/icons/6cbbd606e7d696eab7d54a49ba8a9c0a.jpg",
      name: "Grenade électrique",
      description: "Cette grenade s'accroche à n'importe quelle surface et émet des décharges électriques.",
  },
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/ce01ccf413b2ae6e991f6cef3f226aaa.jpg",
      name: "Grenade de l'orage",
      description: "Cette grenade provoque un orage localisé."
  },
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/9ca15ccec054e10cfe44db67331bbb6b.jpg",
      name: "Grenade aveuglante",
      description: "Une grenade explosive qui inflige des dégâts et Cécité aux cibles proches."
  },    
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/506b6803d54790304775545568d1f9e9.jpg",
      name: "Grenade à ricochets",
      description: "Une grenade qui se sépare à l'impact, créant de multiples projectiles qui cherchent les cibles."
  },
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/9a30af5e62d440a3f201b307e19e54e0.jpg",
      name: "Grenade fluctuante",
      description: "Cette grenade explosive s'accroche à sa cible."
  },    
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/1d4e4334f59a2369a0558452d686d3d0.jpg",
      name: "Greande à répercussions",
      description: "Cette grenade provoque des décharges électriques qui se répercutent sur les cibles proches."
  },    
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/a1f1c4b248bf506739a9888949ca7e57.jpg",
      name: "Grenade à impulsion",
      description: "Cette grenade inflige à intervalles réguliers des dégâts aux cibles prises dans son rayon d'explosion."
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