const grenadeObject = [
    {
      picture: "https://www.bungie.net/common/destiny2_content/icons/5212672b29258f5fe2dce884083f69e1.jpg",
      name: "Grenade d'axions",
      description: "A l'impact, cette décharge de Lumière abyssale se divise en petits éclats qui poursuivent les cibles.",
  },
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/1be0be8f8b7d67414b6f96ff0562f527.jpg",
      name: "Grenade magnétique",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, atque? Incidunt saepe dolor expedita cum tenetur fuga quae quas, omnis, a porro sunt fugit culpa nihil eius rem sint! Maiores!"
  },
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/4809222d69a67300601706cc70fec814.jpg",
      name: "Grenade à dispersion",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, atque? Incidunt saepe dolor expedita cum tenetur fuga quae quas, omnis, a porro sunt fugit culpa nihil eius rem sint! Maiores!"
  },    
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/c0380f98212741e67092cb0a5080ee16.jpg",
      name: "Grenade à vortex",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, atque? Incidunt saepe dolor expedita cum tenetur fuga quae quas, omnis, a porro sunt fugit culpa nihil eius rem sint! Maiores!"
  },
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/bbdf2e0f41bad0fdf167aace75b88b8a.jpg",
      name: "Grenade incapacitante",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, atque? Incidunt saepe dolor expedita cum tenetur fuga quae quas, omnis, a porro sunt fugit culpa nihil eius rem sint! Maiores!"
  },    
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/e1fe72608ed560d20f81ff41c8997fb7.jpg",
      name: "Mur abyssal",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, atque? Incidunt saepe dolor expedita cum tenetur fuga quae quas, omnis, a porro sunt fugit culpa nihil eius rem sint! Maiores!"
  },    
  {
      picture: "https://www.bungie.net/common/destiny2_content/icons/aa8480964870b6b8be7d19ee68814b14.jpg",
      name: "Pic abyssal",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, atque? Incidunt saepe dolor expedita cum tenetur fuga quae quas, omnis, a porro sunt fugit culpa nihil eius rem sint! Maiores!"
  },
];

const grenade = document.querySelector(".all-grenade");

const imageContainer = document.createElement("div");

grenadeObject.forEach((data, index) => {
  const greImg = document.createElement("img");
  greImg.src = data.picture;
  greImg.alt = data.name;
  greImg.addEventListener("click", ( function () {
    const allgreImg = imageContainer.querySelectorAll("img");

    allgreImg.forEach((otherImage, otherIndex) => {
      if (otherIndex !== index) {
        otherImage.style.filter = "grayscale(100%";
      }
    });

    greImg.style.filter = "";

    document.querySelector("#title").textContent = data.name;
    document.querySelector("#description").textContent = data.description;
  }));

  imageContainer.appendChild(greImg);
});

grenade.appendChild(imageContainer);

const titleElement = document.createElement("h4");
titleElement.id = "title";
imageContainer.appendChild(titleElement);

const descriptionElement = document.createElement("p");
descriptionElement.id = "description";
imageContainer.appendChild(descriptionElement);