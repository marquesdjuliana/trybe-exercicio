class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    # 02 - para imprimir:
    def __str__(self):
        string = "{"

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string

    # 03 - para verificar se elemento faz parte ou não:
    def __contains__(self, item):
        return self.set[item]

    # 04 - união:
    def union(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    # 05 - intersecção:
    def intersection(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    # exercise 06:
    def difference(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def issubset(self, conjunto_b):
        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                return False

        return True

    def issuperset(self, conjunto_b):
        for index in range(1001):
            if conjunto_b.set[index] and not self.set[index]:
                return False

        return True


if __name__ == "__main__":
    # exercise 01:
    # conj = Conjunto()

    # for item in [0, 10, 100, 1000]:
    #     conj.add(item)
    # print(conj)

    # exercise 02, imprirmir:
    # conj1 = Conjunto()
    # for i in [7, 2, 10]:
    #     conj1.add(i)
    # print(conj1)

    # exercise 03:
    # conj2 = Conjunto()
    # for i in [1, 2, 3]:
    #     conj2.add(i)
    # print(conj2)
    # print(1 in conj2)
    # print(0 in conj2)

    # exercise 04:
    # conj1 = Conjunto()
    # for i in range(1, 11):
    #     conj1.add(i)

    # conj2 = Conjunto()
    # for i in range(10, 21):
    #     conj2.add(i)

    # conj3 = conj1.union(conj2)
    # print(conj3)

    # exercise 05:
    # conj1 = Conjunto()
    # for i in [1, 2, 3]:
    #     conj1.add(i)

    # conj2 = Conjunto()
    # for i in [7, 2, 10]:
    #     conj2.add(i)

    # conj3 = conj1.intersection(conj2)
    # print(conj3)

    # exercício 06:
    conj1 = Conjunto()
    for i in [1, 2, 3]:
        conj1.add(i)

    conj2 = Conjunto()
    for i in [7, 2, 10]:
        conj2.add(i)

    conj3 = Conjunto()
    conj4 = conj1.union(conj2)

    print(conj1.issubset(conj4))
    print(conj4.issuperset(conj1))
    print(conj3.issubset(conj4))
