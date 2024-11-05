const characterGrid = document.getElementById('character-grid');

fetch('https://rickandmortyapi.com/api/character/?page=19')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(character => {
      const characterCard = document.createElement('div');
      characterCard.classList.add('character-card');

      const characterImage = document.createElement('img');
      characterImage.src = character.image;
      characterImage.alt = character.name;
      characterImage.classList.add('character-image');

      const characterInfo = document.createElement('div');
      characterInfo.classList.add('character-info');

      const characterName = document.createElement('h2');
      characterName.textContent = character.name;
      characterName.classList.add('character-name');

      const characterStatus = document.createElement('p');
      characterStatus.textContent = `Status: ${character.status}`;
      characterStatus.classList.add('character-status');

      const characterSpecies = document.createElement('p');
      characterSpecies.textContent = `Espécie: ${character.species}`;
      characterSpecies.classList.add('character-species');

      const characterType = document.createElement('p');
      characterType.textContent = `TIpo: ${character.type || 'Unknown'}`;
      characterType.classList.add('character-type');

      const characterOrigin = document.createElement('p');
      characterOrigin.textContent = `Origem: ${character.origin.name}`;
      characterOrigin.classList.add('character-origin');

      const characterLocation = document.createElement('p');
      characterLocation.textContent = `localização: ${character.location.name}`;
      characterLocation.classList.add('character-location');

      characterInfo.appendChild(characterName);
      characterInfo.appendChild(characterStatus);
      characterInfo.appendChild(characterSpecies);
      characterInfo.appendChild(characterType);
      characterInfo.appendChild(characterOrigin);
      characterInfo.appendChild(characterLocation);

      characterCard.appendChild(characterImage);
      characterCard.appendChild(characterInfo);

      characterGrid.appendChild(characterCard);
    });
  })
  .catch(error => {
    console.error('Error fetching characters:', error);
  });