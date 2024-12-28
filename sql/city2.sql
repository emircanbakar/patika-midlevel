SELECT * FROM public.city
ORDER BY city_id ASC 

SELECT country_id, COUNT(*) AS city_count
FROM city
GROUP BY country_id
ORDER BY city_count DESC
LIMIT 1;

SELECT city.city, country.country
FROM city
INNER JOIN country
ON city.country_id = country.country_id;

SELECT city.city, country.country
FROM city
LEFT JOIN country
ON city.country_id = country.country_id;

