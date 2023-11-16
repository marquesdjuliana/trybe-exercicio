# 01:
# Consulte a forma de se criar um dicionário chamado de dict comprehension:
# crie um dicionário que mapeia inteiros de 3 a 20 para o seu dobro.
double = {i: i * 2 for i in range(3, 21)}

print(double)

# 02:
# Construa um dicionário com a contagem de cada caractere da palavra:
# Utilize o pseudocódigo e o exemplo abaixo para se nortear.
# Para cada char na string:
# 	- Se o char não estiver no dicionário, inclua com o valor 1;

# 	- Se estiver, incremente o valor.
str = "bbbbaaaacccaaaaaaddddddddccccccc"
str = "coxinha"
count_chars = {}

for char in str:
    if char not in count_chars:
        count_chars[char] = 1
    else:
        count_chars[char] += 1

print(count_chars)

# 03:
# Utilize o dicionário criado no exercício 01:
# Para as chaves ímpares, mapear para o  seu triplo
# Consultar o método keys(), e atualize o seu dicionário para a nova regra.
for key in double.keys():
    if key % 2 != 0:
        double[key] = key * 3


print(double)
