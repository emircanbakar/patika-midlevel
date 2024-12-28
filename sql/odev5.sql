SELECT * FROM public.film
ORDER BY film_id ASC 

SELECT title, length
FROM film
WHERE title LIKE '%n'
ORDER BY length DESC
LIMIT 5;

SELECT title, length
FROM film
WHERE title LIKE '%n'
ORDER BY length ASC
OFFSET 5 LIMIT 5;

SELECT customer_id, first_name, last_name, store_id
FROM customer
WHERE store_id = 1
ORDER BY last_name DESC
LIMIT 4;

SELECT AVG(rental_rate) AS average_rental_rate
FROM film;

SELECT COUNT(*) AS count_c_films
FROM film
WHERE title LIKE 'C%';

SELECT MAX(length) AS max_length
FROM film
WHERE rental_rate = 0.99;


SELECT COUNT(DISTINCT replacement_cost) AS distinct_replacement_cost_count
FROM film
WHERE length > 150;

SELECT rating, COUNT(*) AS film_count
FROM film
GROUP BY rating;

SELECT replacement_cost, COUNT(*) AS film_count
FROM film
GROUP BY replacement_cost
HAVING COUNT(*) > 50;


