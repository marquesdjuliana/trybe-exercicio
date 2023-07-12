SELECT 
    nome_pessoa_usuaria AS pessoa_usuaria,
    COUNT(*) AS musicas_ouvidas,
    ROUND(SUM(duracao_segundos) / 60, 2) AS total_minutos
FROM
    pessoa_usuaria u
	INNER JOIN
    historico_reproducao h 
    ON h.pessoa_usuaria_id = u.pessoa_usuaria_id
	INNER JOIN
    cancao c ON c.cancao_id = h.cancao_id
GROUP BY u.nome_pessoa_usuaria
ORDER BY pessoa_usuaria;
