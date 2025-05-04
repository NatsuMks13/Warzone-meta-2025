fetch("https://api.jikan.moe/v4/seasons/now")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("anime-list");
    container.innerHTML = "";
    data.data.slice(0, 12).forEach(anime => {
      const div = document.createElement("div");
      div.className = "anime";
      div.innerHTML = `
        <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
        <h3>${anime.title}</h3>
        <p>${anime.aired.from ? new Date(anime.aired.from).toLocaleDateString() : "Date inconnue"}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById("anime-list").innerText = "Erreur de chargement.";
    console.error(err);
  });
