SELECT
  (SELECT COUNT(*) FROM cancao) AS cancoes,
  (SELECT COUNT(*) FROM pessoa_artista) AS artistas,
  (SELECT COUNT(*) FROM album) AS albuns;
