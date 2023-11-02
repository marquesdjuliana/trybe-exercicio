import sys


def txt_importer(path_file: str) -> list:
    try:
        with open(path_file, "r") as file:
            if path_file.endswith(".txt"):
                return file.read().split("\n")
            else:
                sys.stderr.write("Formato inválido\n")

    except FileNotFoundError:
        sys.stderr.write(f"Arquivo {path_file} não encontrado\n")
        return None
