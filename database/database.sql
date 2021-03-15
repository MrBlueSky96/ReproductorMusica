CREATE DATABASE ng_music_db;

USE ng_music_db;

CREATE TABLE songs(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    autor VARCHAR(180),
    route VARCHAR(500),
    duration VARCHAR (10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE playlists(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    autor VARCHAR(180),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE song_playlist(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_song INT(11) NOT NULL,
    FOREIGN KEY(id_song) REFERENCES songs(id),
    id_playlist INT(11) NOT NULL,
    FOREIGN KEY(id_playlist) REFERENCES playlists(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE songs;



"title": "ERROR404",
        "autor": "N3ÜRØ",
        "route": "../../../assets/songs/N3ÜRØ - ERROR404/ERROR404 N3ÜRØ DUBSTEP.mp3",
        "duration": "3:36"

"title": "VIRUS",
    "autor": "N3ÜRØ",
    "route": "../../../assets/songs/N3ÜRØ - VIRUS/N3ÜRØ  VIRUS DUBSTEP.mp3",
    "duration": "4:04"