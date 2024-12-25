SELECT * FROM public.city
ORDER BY city_id ASC 

SELECT COUNT(*)
FROM city
WHERE city LIKE '%r' OR city LIKE '%R';
