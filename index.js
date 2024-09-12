const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Brandy (You're a Fine Girl)", artist: "Looking Glass", genre: "Rock" },
    { title: "Go All the Way", artist: "Raspberries", genre: "Rock" },
    { title: "Mr. Blue Sky", artist: "Electric Light Orchestra", genre: "Rock" },
    { title: "Wham Bam Shang-A-Lang", artist: "Silver", genre: "Pop" },
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" }
];


const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

function generatePlaylist(guardians, songs) {
    const playlistsDiv = document.getElementById('playlists');

    Object.keys(guardians).forEach(guardian => {
        const guardianDiv = document.createElement('div');
        guardianDiv.classList.add('playlist');
        
        const guardianName = document.createElement('h2');
        guardianName.textContent = `${guardian}'s Playlist`;
        guardianName.style.color = '#FFD700';
        guardianDiv.appendChild(guardianName);
        
        const preferredGenre = guardians[guardian];
        const filteredSongs = songs.filter(song => song.genre === preferredGenre);
        
        const songList = document.createElement('ul');

        filteredSongs.forEach(song => {
            const songItem = document.createElement('li');
            songItem.classList.add('song');

            const songTitle = document.createElement('span');
            songTitle.classList.add('song-title');
            songTitle.textContent = song.title;

            songItem.appendChild(songTitle);
            songItem.appendChild(document.createTextNode(` by ${song.artist}`));
            songList.appendChild(songItem);
        });

        guardianDiv.appendChild(songList);

        playlistsDiv.appendChild(guardianDiv);
    });
}

generatePlaylist(guardians, songs);
