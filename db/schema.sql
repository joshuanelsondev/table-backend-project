DROP DATABASE IF EXISTS TheTableDB;
CREATE DATABASE TheTableDB;

\c TheTableDB;

CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 name TEXT,
 email TEXT NOT NULL,
 username TEXT UNIQUE NOT NULL,
 password TEXT NOT NULL,
 is_vegan BOOLEAN,
 restrictions TEXT[],
 date_joined DATE
)