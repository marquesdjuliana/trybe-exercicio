SELECT
    pa.nome_pessoa_artista AS artista,
    a.nome_album AS album
FROM
    pessoa_artista pa
    INNER JOIN album a ON pa.pessoa_artista_id = a.pessoa_artista_id
WHERE
    pa.nome_pessoa_artista = 'Elis Regina'
ORDER BY album;
