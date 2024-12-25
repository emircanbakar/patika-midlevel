SELECT * FROM public.film
ORDER BY film_id ASC 

SELECT title, description
FROM film
ORDER BY title, description;


SELECT *
FROM film
WHERE length > 60 AND length < 75
ORDER BY length;

SELECT *
FROM film
WHERE rental_rate = 0.99 AND (replacement_cost = 12.99 OR replacement_cost = 28.99)
ORDER BY rental_rate, replacement_cost;

SELECT last_name
FROM customer
WHERE first_name = 'Mary';

SELECT *
FROM film
WHERE NOT (length > 50) AND NOT (rental_rate = 2.99 OR rental_rate = 4.99)
ORDER BY length, rental_rate;


SELECT *
FROM film
WHERE replacement_cost BETWEEN 12.99 AND 16.99
ORDER BY replacement_cost;

SELECT first_name, last_name
FROM actor
WHERE first_name IN ('Penelope', 'Nick', 'Ed')
ORDER BY first_name, last_name;

SELECT *
FROM film
WHERE rental_rate IN (0.99, 2.99, 4.99) 
  AND replacement_cost IN (12.99, 15.99, 28.99)
ORDER BY rental_rate, replacement_cost;

SELECT DISTINCT replacement_cost
FROM film
ORDER BY replacement_cost;

SELECT COUNT(DISTINCT replacement_cost) AS distinct_replacement_cost_count
FROM film;

SELECT COUNT(*)
FROM film
WHERE title LIKE 'T%' AND rating = 'G';


