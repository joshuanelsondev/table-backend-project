DROP DATABASE IF EXISTS thetabledb;
CREATE DATABASE thetabledb;

\c thetabledb;

CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 name TEXT,
 email TEXT NOT NULL,
 username TEXT UNIQUE NOT NULL,
 password TEXT NOT NULL,
 is_vegan BOOLEAN,
 restrictions TEXT[],
 date_joined DATE
);

CREATE TABLE dishes (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 calories INTEGER,
 is_vegan BOOLEAN,
 category TEXT,
 image_url TEXT,
 portions INTEGER
);