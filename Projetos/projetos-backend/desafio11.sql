SELECT notes
FROM purchase_orders
WHERE notes REGEXP 'Purchase generated based on Order #[3][0-9]|39';

-- SELECT notes
-- FROM purchase_orders
-- WHERE CAST(SUBSTRING(notes, INSTR(notes, '#')+1) AS UNSIGNED) BETWEEN 30 AND 39;
