def calculations(n):
    number1 = 0
    for n1 in range(n):
        number1 += n1

    number2 = 0
    for n1 in range(n):
        for n2 in range(n):
            number2 += n1 + n2

    number3 = 0
    for n1 in range(n):
        for n2 in range(n):
            for n3 in range(n):
                number3 += n1 + n2 + n3

    return number1, number2, number3


n1, n2, n3 = calculations(100)
print(f"{n1}, {n2}, {n3}")

# ordem de cmplexidade: um linear, um quadrática e uma cúbica
#  o(n + n2 + n3) -> ou falo apenas a maior complexidade n3
# obs.: se os loops estão aninhados multiplica-se;
# e se estão em paralelos soma-se;
