def entregar_presentes_de_natal(casas):
    print("Casas para serem entregues", casas)

    if len(casas) == 1:
        casa = casas[0]
        print("Entregando o presente", casa)
    else:
        metade = len(casas) // 2
        primeira_metade = casas[:metade]
        segunda_metade = casas[metade:]

        entregar_presentes_de_natal(primeira_metade)
        entregar_presentes_de_natal(segunda_metade)


casas = [
    "Casa do Will",
    "Casa do Carlos",
    "Casa do V",
    "Casa do Eduardo",
    "Casa do Eder",
    "Casa do Pedro",
]

entregar_presentes_de_natal(casas)


# Ajudante 1
# ["Casa do Will", "Casa do João", "Casa do Phelps", "Casa do Carlos"]
# Ajudante 2      /                    Ajudante 5  \
# ["Casa do Will", "Casa do João"] ["Casa do Phelps", "Casa do Carlos"]
#       /                 \                  /                  \
# ["Casa do Will"] ["Casa do João"] ["Casa do Phelps"] ["Casa do Carlos"]
# Ajudante 3         Ajudante 4           Ajudante 6     Ajudante 7


# Primeiro: Ajudante 3
# Segundo: Ajudante 4
# Terceiro: Ajudante 6
# Quarto: Ajudante 7