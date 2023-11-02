from ting_file_management.queue import Queue


def exists_word(word: str, instance: Queue):
    result = []
    index = 0

    while index < len(instance):
        matching_lines = []
        file_data = instance.search(index)
        file_name = file_data["nome_do_arquivo"]
        lines = file_data["linhas_do_arquivo"]

        for line_number, line in enumerate(lines, start=1):
            if word.lower() in line.lower():
                matching_lines.append({"linha": line_number})

        if matching_lines:
            result.append(
                {
                    "palavra": word,
                    "arquivo": file_name,
                    "ocorrencias": matching_lines,
                }
            )
        index += 1

    return result


def search_by_word(word: str, instance: Queue):
    result = []

    for i in range(len(instance)):
        file_data = instance.search(i)
        file_name = file_data["nome_do_arquivo"]
        lines = file_data["linhas_do_arquivo"]
        matching_lines = []

        for line_number, line in enumerate(lines, start=1):
            if word.lower() in line.lower():
                matching_lines.append({"linha": line_number, "conteudo": line})

        if matching_lines:
            result.append(
                {
                    "palavra": word,
                    "arquivo": file_name,
                    "ocorrencias": matching_lines,
                }
            )

    return result
