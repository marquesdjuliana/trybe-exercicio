from typing import List


def find_average(numbers: List[int]) -> float:
    if len(numbers) == 0:
        return 0.0
    else:
        soma = sum(numbers)
        media = soma / len(numbers)
        return media
