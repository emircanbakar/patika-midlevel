SELECT * FROM public.payment
ORDER BY payment_id ASC 

SELECT COUNT(*) 
FROM film 
WHERE length > (SELECT AVG(length) FROM film);

SELECT COUNT(*) 
FROM film 
WHERE rental_rate = (SELECT MAX(rental_rate) FROM film);

SELECT * 
FROM film 
WHERE rental_rate = (SELECT MIN(rental_rate) FROM film) 
AND replacement_cost = (SELECT MIN(replacement_cost) FROM film);

SELECT customer_id, COUNT(*) AS total_payments 
FROM payment 
GROUP BY customer_id 
ORDER BY total_payments DESC;