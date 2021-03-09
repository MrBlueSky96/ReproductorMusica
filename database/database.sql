CREATE DATABASE ng_music_db;

USE ng_music_db;

CREATE TABLE song(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    autor VARCHAR(180),
    route VARCHAR(500),
    duration VARCHAR (10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE song;