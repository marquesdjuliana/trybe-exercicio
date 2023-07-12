SELECT
  nome_cancao AS cancao,
  COUNT(*) AS reproducoes
FROM
  cancao
  INNER JOIN historico_reproducao ON cancao.cancao_id = historico_reproducao.cancao_id
GROUP BY
  cancao.cancao_id
ORDER BY
  reproducoes DESC, cancao
LIMIT 2;
