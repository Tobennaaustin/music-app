// async function search() {
//     const query = document.getElementById('searchInput').value.trim();
//     const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your Spotify API access token

//     if (!query) {
//         alert('Please enter a search query');
//         return;
//     }

//     try {
//         const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track,artist,playlist,genre,show`, {
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         displayResults(data);
//     } catch (error) {
//         console.error('Error:', error);
//         alert('An error occurred while fetching data. Please try again later.');
//     }
// }

// function displayResults(data) {
//     const searchResultsDiv = document.getElementById('searchResults');
//     searchResultsDiv.innerHTML = '';

//     if (data.tracks.items.length > 0) {
//         searchResultsDiv.innerHTML += '<h2>Tracks</h2>';
//         data.tracks.items.forEach(track => {
//             searchResultsDiv.innerHTML += `<p>${track.name} by ${track.artists.map(artist => artist.name).join(', ')}</p>`;
//         });
//     }

//     if (data.artists.items.length > 0) {
//         searchResultsDiv.innerHTML += '<h2>Artists</h2>';
//         data.artists.items.forEach(artist => {
//             searchResultsDiv.innerHTML += `<p>${artist.name}</p>`;
//         });
//     }

//     if (data.playlists.items.length > 0) {
//         searchResultsDiv.innerHTML += '<h2>Playlists</h2>';
//         data.playlists.items.forEach(playlist => {
//             searchResultsDiv.innerHTML += `<p>${playlist.name}</p>`;
//         });
//     }

//     if (data.genres.items.length > 0) {
//         searchResultsDiv.innerHTML += '<h2>Genres</h2>';
//         data.genres.items.forEach(genre => {
//             searchResultsDiv.innerHTML += `<p>${genre.name}</p>`;
//         });
//     }

//     if (data.shows.items.length > 0) {
//         searchResultsDiv.innerHTML += '<h2>Shows</h2>';
//         data.shows.items.forEach(show => {
//             searchResultsDiv.innerHTML += `<p>${show.name}</p>`;
//         });
//     }
// }
// const playlistId = '4PbD2N7DMYI5Eb35o8nc3r';
// <iframe
//   title="Spotify Embed: Recommendation Playlist "
//   src={`https://open.spotify.com/embed/playlist/4PbD2N7DMYI5Eb35o8nc3r?utm_source=generator&theme=0`}
//   width="100%"
//   height="100%"
//   style={{ minHeight: '360px' }}
//   frameBorder="0"
//   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//   loading="lazy"
// />

async function search() {
    const query = document.getElementById('searchInput').value.trim();
    const apiKey = 'adf6a3200f96fbb03657e4913343e865'; // Replace with your Deezer API key

    if (!query) {
        alert('Please enter a search query');
        return;
    }

    try {
        const response = await fetch(`https://api.deezer.com/search?q=${query}`, {
            headers: {
                'X-RapidAPI-Key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching data. Please try again later.');
    }
}

function displayResults(data) {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '';

    if (data.data.length > 0) {
        searchResultsDiv.innerHTML += '<h2>Search Results</h2>';
        data.data.forEach(item => {
            if (item.type === 'track') {
                searchResultsDiv.innerHTML += `<p>Song: ${item.title} by ${item.artist.name}</p>`;
            } else if (item.type === 'artist') {
                searchResultsDiv.innerHTML += `<p>Artist: ${item.name}</p>`;
            } else if (item.type === 'playlist') {
                searchResultsDiv.innerHTML += `<p>Playlist: ${item.title}</p>`;
            } else if (item.type === 'genre') {
                searchResultsDiv.innerHTML += `<p>Genre: ${item.name}</p>`;
            } else if (item.type === 'show') {
                searchResultsDiv.innerHTML += `<p>Show: ${item.title}</p>`;
            }
        });
    } else {
        searchResultsDiv.innerHTML = '<p>No results found</p>';
    }
}