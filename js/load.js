let allGames = [];

fetch('games.json')
  .then(response => {
    if (!response.ok) throw new Error("Couldn't load games.json");
    return response.json();
  })
  .then(games => {
    allGames = games; // Store all games for filtering
    displayGames(allGames); // Initial display

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const filtered = allGames.filter(game => game.title.toLowerCase().includes(query));
      displayGames(filtered);
    });
  })
  .catch(error => {
    document.getElementById('gameGrid').innerText = 'Failed to load games.';
    console.error(error);
  });

function displayGames(games) {
  const gameGrid = document.getElementById('gameGrid');
  gameGrid.innerHTML = '';

  games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.style.cursor = 'pointer';

    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}" />
      <div class="game-card-title">${game.title}</div>
    `;

    card.addEventListener('click', () => {
      try {
        const win = window.open('about:blank', '_blank');
        if (!win) throw new Error("Popup blocked");

        const iframe = win.document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src = game.link;

        win.document.body.style.margin = "0";
        win.document.body.style.height = "100vh";
        win.document.body.appendChild(iframe);

        win.document.title = '\u200B';

        const link = win.document.createElement('link');
        link.rel = 'icon';
        link.href = 'blank.ico';
        win.document.head.appendChild(link);
      } catch (e) {
        alert("Please allow popups and redirects for this site for the game to open.");
      }
    });

    gameGrid.appendChild(card);
  });
}
