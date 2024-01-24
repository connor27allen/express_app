DROP DATABASE IF EXISTS mysql_first_day_db;

CREATE DATABASE mysql_first_day_db;

USE mysql_first_day_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL
);

-- INSERT INTO users (username, email, password) VALUES
--     ('JD', 'jd@test.com', 'password123'),
--     ('KD', 'kd@test.com', 'password456'),
--     ('LD', 'ld@test.com', 'password789');

--     SELECT * FROM users;