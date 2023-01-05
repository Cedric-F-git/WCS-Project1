const grenadeObject = [
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
]

const grenade = document.querySelector(".all-grenade");

function createAbilityClass(imageUrl, title, paragraphe) {
    const ulGrenade = document.createElement("div");
    ulGrenade.classList.add("ul-grenade");
    grenade.appendChild(ulGrenade);

    const greList = document.createElement("div");
    greList.classList.add("gre-img");
    ulGrenade.appendChild(greList);

    const grenadeImg = document.createElement("img");
    grenadeImg.src = imageUrl;
    grenadeImg.alt = title;
    grenadeImg.classList.add("grenade-img");
    greList.appendChild(grenadeImg);

    const grenadeContainer = document.createElement("div");
    grenadeContainer.classList.add("gre-container");
    ulGrenade.appendChild(grenadeContainer);

    const grenadeTitle = document.createElement("h4");
    grenadeTitle.innerHTML = title;
    grenadeTitle.classList.add("grenade-name");
    grenadeContainer.appendChild(grenadeTitle);

    const grenadeDescrip = document.createElement("p");
    grenadeDescrip.innerHTML = paragraphe;
    grenadeDescrip.classList.add("grenade-desciption");
    grenadeContainer.appendChild(grenadeDescrip);
}

for (let i=0; i<grenadeObject.length; i++) {
    createAbilityClass(grenadeObject[i].picture, grenadeObject[i].name, grenadeObject[i].description);
}
