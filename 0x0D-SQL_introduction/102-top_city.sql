-- Script that displays the top 3 of cities temperature during July and August ordered by temperature (descending)
-- Select filetered Group by Get average and Order by with Limit
SELECT city, Avg(value) AS avg_temp
FROM   temperatures
WHERE  month >= 7 AND month < 9
GROUP BY city
ORDER BY avg_temp DESC
LIMIT 3;
