const grenadeObject = [
    {
      picture: "https://www.bungie.net/common/destiny2_content/icons/5212672b29258f5fe2dce884083f69e1.jpg",
      name: "Grenade d'axions",
      description: "A l'impact, cette décharge de Lumière abyssale se divise en petits éclats qui poursuivent les cibles.",
  },
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/1be0be8f8b7d67414b6f96ff0562f527.jpg",
      name: "Grenade magnétique",
      description: "Cette grenade s'accroche sur les cibles et explose deux fois."
  },
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/4809222d69a67300601706cc70fec814.jpg",
      name: "Grenade à dispersion",
      description: "Une grenade qui se divise en de nombreuses sous-munitions, provoquant de multiples explosions sur une vaste zone."
  },    
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/c0380f98212741e67092cb0a5080ee16.jpg",
      name: "Grenade à vortex",
      description: "Cette grenade crée un vortex qui attire les cibles vers l'intérieur et blesse en continu celles qui sont piégées dedans."
  },
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/bbdf2e0f41bad0fdf167aace75b88b8a.jpg",
      name: "Grenade incapacitante",
      description: "Cette charge explosive réprime les cibles, les empêchant temporairement d'utiliser des capacités ou des attaques spéciales."
  },    
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/e1fe72608ed560d20f81ff41c8997fb7.jpg",
      name: "Mur abyssal",
      description: "L'explosion de la grenade projette un mur horizontal de Lumière abyssale."
  },    
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/aa8480964870b6b8be7d19ee68814b14.jpg",
      name: "Pic abyssal",
      description: "Cette grenade s'accroche à n'importe quelle surface et émet un torrent de Lumière abyssale infligeant des dégâts."
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
