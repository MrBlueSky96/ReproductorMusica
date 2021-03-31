CREATE DATABASE ng_music_db;

USE ng_music_db;

CREATE TABLE songs(
    id_song INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title_song VARCHAR(180),
    autor_song VARCHAR(180),
    route_song VARCHAR(500),
    duration_song VARCHAR (10),
    created_at_song TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE playlists(
    id_playlist INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title_playlist VARCHAR(180),
    autor_playlist VARCHAR(180),
    image_playlist VARCHAR (500),
    created_at_playlist TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE song_playlist(
    id_song_playlist INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_FromSong INT(11) NOT NULL,
    FOREIGN KEY(id_FromSong) REFERENCES songs(id_song),
    id_FromPlaylist INT(11) NOT NULL,
    FOREIGN KEY(id_FromPlaylist) REFERENCES playlists(id_playlist),
    created_at_song_playlist TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE customPlaylists(
    id_customPlaylist INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title_customPlaylist VARCHAR(180),
    description_customPlaylist VARCHAR(180),
    image_customPlaylist VARCHAR (500),
    created_at_customPlaylist TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE song_customPlaylist(
    id_song_customPlaylist INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_FromSong INT(11) NOT NULL,
    FOREIGN KEY(id_FromSong) REFERENCES songs(id_song),
    id_FromCustomPlaylist INT(11) NOT NULL,
    FOREIGN KEY(id_FromCustomPlaylist) REFERENCES customPlaylists(id_customPlaylist),
    created_at_song_customPlaylist TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


"title_song": "ERROR404",
"autor_song": "N3ÜRØ",
"route_song": "../../../assets/songs/N3ÜRØ - ERROR404/ERROR404 N3ÜRØ DUBSTEP.mp3",
"duration_song": "3:36"

"title_song": "VIRUS",
"autor_song": "N3ÜRØ",
"route_song": "../../../assets/songs/N3ÜRØ - VIRUS/N3ÜRØ  VIRUS DUBSTEP.mp3",
"duration_song": "4:04"




"title_playlist": "canciones Neuro",
"autor_playlist": "neuro",
"image_playlist": "../../../assets/playlists/3.jpg"

"title_playlist": "canciones lorem ipsum",
"autor_playlist": "yooo",
"image_playlist": "../../../assets/playlists/gold.jpg"
