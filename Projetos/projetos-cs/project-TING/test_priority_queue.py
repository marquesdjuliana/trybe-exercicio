import pytest
from ting_file_management.priority_queue import PriorityQueue


def test_basic_priority_queueing():
    # adicionando arquivo e verificando prioridade:
    priority_queue = PriorityQueue()
    file_1 = {
        "nome_do_arquivo": "file1.txt",
        "qtd_linhas": 4,
        "linhas_do_arquivo": [
            "linha1",
            "linha2",
            "linha3",
            "linha4",
        ],
    }
    file_2 = {
        "nome_do_arquivo": "file2.txt",
        "qtd_linhas": 6,
        "linhas_do_arquivo": [
            "linha1",
            "linha2",
            "linha3",
            "linha4",
            "linha5",
            "linha6",
        ],
    }

    priority_queue.enqueue(file_1)
    priority_queue.enqueue(file_2)

    assert len(priority_queue) == 2
    assert priority_queue.search(1) == file_2
    assert priority_queue.is_priority(file_1) is True
    assert priority_queue.is_priority(file_2) is False

    # acessar um índice inválido:
    with pytest.raises(IndexError):
        priority_queue.search(2)

    # remover o primeiro arquivo:
    removed_file = priority_queue.dequeue()
    assert removed_file == file_1
    assert len(priority_queue) == 1

    # remover o segundo arquivo:
    removed_file = priority_queue.dequeue()
    assert removed_file == file_2
    assert len(priority_queue) == 0
