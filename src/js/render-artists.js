import { artistListEl, artistModalPagesEl } from './refs';

export function renderArtistCard(artist) {
  const { genres, strArtist, strArtistThumb, strBiographyEN, _id } = artist;
  const artistCard = `<li class="artist-card" data-id="${_id}"> 
  
    <img  class="artist-thumb" src="${strArtistThumb}" alt="${strArtist}">
    <ul class="artist-genres">
    ${renderGenresList(genres)}
    </ul>
    <h2 class="artist-name">${strArtist}</h2>
    <p class="artist-biography">${strBiographyEN}</p>
    </li>`;

  return artistCard;
}

export function renderGenresList(genres) {
  const genresList = genres.map(genre => `<li>${genre}</li>`).join('');
  return genresList;
}

export function renderArtistList(artistList) {
  const artistListMarkup = artistList.map(renderArtistCard).join('');
  artistListEl.innerHTML = '';
  artistListEl.insertAdjacentHTML('beforeend', artistListMarkup);
}

export function renderPagination(page, totalPages) {
  let html = '';

  // ← Previous
  html += `
    <button class="page-btn" ${page === 1 ? 'disabled' : ''} data-page="${
    page - 1
  }">
      ←
    </button>
  `;

  // Pages
  for (let i = 1; i <= totalPages; i++) {
    // прикриваємо зайві номери, якщо їх > 7
    if (i === 1 || i === totalPages || Math.abs(i - page) <= 1) {
      html += `
        <button class="page-btn ${i === page ? 'active' : ''}" data-page="${i}">
          ${i}
        </button>
      `;
    } else if (i === page - 2 || i === page + 2) {
      html += `<span class="dots">...</span>`;
    }
  }

  // → Next
  html += `
    <button class="page-btn" ${
      page === totalPages ? 'disabled' : ''
    } data-page="${page + 1}">
      →
    </button>
  `;

  artistModalPagesEl.innerHTML = html;
}
