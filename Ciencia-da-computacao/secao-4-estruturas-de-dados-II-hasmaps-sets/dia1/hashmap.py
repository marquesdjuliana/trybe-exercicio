class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        # 01: SEM Separate Chaining:
        # self._buckets = [None for i in range(10)]

        # 02 COM lista de listas -> Separate Chaining:
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        # 01:
        # self._buckets[address] = employee
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        # 01:
        # return self._buckets[address].name

        # 02:
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    # 01: função que adicina SEM Separate Chaining:
    # def update_value(self, id_num, new_name):
    #     address = self.get_address(id_num)
    #     if self._buckets[address] is not None:
    #         self._buckets[address].name = new_name


if __name__ == "__main__":
    employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
    registry = HashMap()

    for id_num, name in employees:
        employee = Employee(id_num, name)
        registry.insert(employee)

    print(registry.get_value(10))


# registry.update_value(10, "nameAlterado")
# print(registry.get_value(10))
