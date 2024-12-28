SELECT * FROM public.customer
ORDER BY customer_id ASC 

SELECT store_id, COUNT(*) AS customer_count
FROM customer
GROUP BY store_id;

SELECT customer.first_name, customer.last_name, payment.payment_id
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id;

SELECT customer.first_name, customer.last_name, rental.rental_id
FROM customer
INNER JOIN rental
ON customer.customer_id = rental.customer_id;

SELECT customer.first_name, customer.last_name, payment.payment_id
FROM customer
RIGHT JOIN payment
ON customer.customer_id = payment.customer_id;

SELECT customer.first_name, customer.last_name, rental.rental_id
FROM customer
FULL JOIN rental
ON customer.customer_id = rental.customer_id;


