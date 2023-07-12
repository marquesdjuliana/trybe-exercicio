SELECT
  u.nome_pessoa_usuaria AS pessoa_usuaria,
  CASE
    WHEN MAX(h.data_reproducao) >= '2021-01-01' THEN 'Ativa'
    ELSE 'Inativa'
  END AS status_pessoa_usuaria
FROM
  pessoa_usuaria u
  LEFT JOIN historico_reproducao h ON u.pessoa_usuaria_id = h.pessoa_usuaria_id
GROUP BY
  u.pessoa_usuaria_id
ORDER BY
  pessoa_usuaria;
