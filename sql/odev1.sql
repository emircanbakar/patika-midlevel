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

