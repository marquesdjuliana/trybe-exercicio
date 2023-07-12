SELECT
    pa.nome_pessoa_artista AS artista,
    a.nome_album AS album,
    COUNT(pas.pessoa_usuaria_id) AS pessoas_seguidoras
FROM
    pessoa_artista_seguida pas
    JOIN pessoa_usuaria pu ON pas.pessoa_usuaria_id = pu.pessoa_usuaria_id
    JOIN pessoa_artista pa ON pas.pessoa_artista_id = pa.pessoa_artista_id
    JOIN album a ON a.pessoa_artista_id = pa.pessoa_artista_id
GROUP BY pas.pessoa_artista_id, a.album_id
ORDER BY pessoas_seguidoras DESC, artista, album;
