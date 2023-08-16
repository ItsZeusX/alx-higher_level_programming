-- Script that displays the max temperature of each state (ordered by State name).
-- Select Group by Get max and Order by with Limit
SELECT state AS state, Max(value) AS max_temp
FROM   temperatures
GROUP BY state
ORDER BY state;
