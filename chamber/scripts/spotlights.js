const spotlightContainer =
  document.querySelector("#spotlight-container");

async function getSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    const members = data.members.filter(member =>
      member.membership === "Gold" ||
      member.membership === "Silver"
    );

    const shuffled = members.sort(() => 0.5 - Math.random());

    const selected = shuffled.slice(0, 3);

    displaySpotlights(selected);

  } catch (error) {
    console.error("Spotlight Error:", error);
  }
}

function displaySpotlights(members) {

  members.forEach(member => {

    const card = document.createElement("section");
    card.classList.add("spotlight-card");

    card.innerHTML = `
      <h3>${member.name}</h3>

      <img
        src="${member.image}"
        alt="${member.name} logo"
        loading="lazy"
        width="150"
        height="150"
      >

      <p>${member.address}</p>
      <p>${member.phone}</p>

      <a href="${member.website}" target="_blank">
        Visit Website
      </a>

      <p><strong>${member.membership} Member</strong></p>
    `;

    spotlightContainer.appendChild(card);
  });
}

getSpotlights();