import sys
from ting_file_management.file_management import txt_importer
from ting_file_management.queue import Queue


def process(path_file: str, instance: Queue) -> None:
    file_content = txt_importer(path_file)

    if file_content is None:
        return

    file_name = path_file
    for i in range(len(instance)):
        existing_file = instance.search(i)
        if existing_file["nome_do_arquivo"] == file_name:
            return

    processed_data = {
        "nome_do_arquivo": file_name,
        "qtd_linhas": len(file_content),
        "linhas_do_arquivo": file_content,
    }

    instance.enqueue(processed_data)

    sys.stdout.write(str(processed_data) + "\n")


def remove(instance: Queue) -> None:
    if len(instance) == 0:
        sys.stdout.write("Não há elementos\n")
    else:
        removed_file = instance.dequeue()
        sys.stdout.write(
            f"Arquivo {removed_file['nome_do_arquivo']} removido com sucesso\n"
        )


def file_metadata(instance: Queue, position: int) -> None:
    if position < 0 or position >= len(instance):
        sys.stderr.write("Posição inválida\n")
    else:
        file_info = instance.search(position)
        sys.stdout.write(str(file_info) + "\n")
