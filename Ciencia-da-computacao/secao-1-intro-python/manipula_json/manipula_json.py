import json

# loads:
# with open("pokemons.json") as pokemon_file:
#     content = pokemon_file.read()
#     pokemons = json.loads(content)["results"]


# print(pokemons[0])

# load:
with open("pokemons.json") as pokemon_file:
    pokemons = json.load(pokemon_file)["results"]
print(pokemons[0])

# separando somente os do tipo grass:
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

# dumps: abre o arquivo para escrevermos apenas o pokemons do tipo grass
# with open("grass_pokemons.json", "w") as file:
#     json_to_write = json.dumps(
#         grass_type_pokemons
#     )  # conversão de Python para o formato json (str)
#     file.write(json_to_write)


# dump: escreve no arquivo já transformando em formato json a estrutura
with open("grass_pokemons.json", "w") as file:
    json.dump(grass_type_pokemons, file)
