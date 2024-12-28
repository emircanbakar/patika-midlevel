CREATE TABLE employee (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    birthday DATE,
    email VARCHAR(100)
);
COPY employee(id, name, birthday, email)
FROM '/data.csv' DELIMITER ',' CSV HEADER;

UPDATE employee SET name = 'John Doe' WHERE id = 1;

UPDATE employee SET birthday = '1985-05-15' WHERE id = 2;

UPDATE employee SET email = 'newemail@example.com' WHERE id = 3;

UPDATE employee SET name = 'Jane Smith' WHERE id = 4;

UPDATE employee SET birthday = '1992-07-20' WHERE id = 5;

-- id'ye göre silme
DELETE FROM employee WHERE id = 1;

-- Name'e göre silme
DELETE FROM employee WHERE name = 'John Doe';

-- Email'e göre silme
DELETE FROM employee WHERE email = 'newemail@example.com';

-- Birthday'e göre silme
DELETE FROM employee WHERE birthday = '1985-05-15';

-- id'ye göre silme
DELETE FROM employee WHERE id = 2;

