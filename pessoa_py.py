class Empresa:
    def __init__(self, nome):
        self.nome = nome

    def __eq__(self, other):
        if self.nome != other.nome:
            return True
        else:
            return False

class Pessoa:
    def __init__(self, nome, idade=0):
        self.nome = nome
        self.idade = idade

    def __repr__(self):
        return f"Pessoa chamada: {self.nome}!"

    def __eq__(self, other):
        return self.nome == other.nome:

    def __lt__(self, other):
        return self.idade < other.idade



def main():

    paloma = Pessoa("Paloma", 25)
    carol = Pessoa("Carol", 99)
    eduardo = Pessoa("Eduardo", 21)
    bux = Pessoa("Bux", 32)
    fulio = Pessoa("Fulio", 12)
    l = [carol, eduardo, bux, carol, fulio]
    print(l)
    print(sorted(l))

    trybe = Empresa("Paloma")
    if trybe == paloma:
        print(paloma)
        print(layo)


if __name__ == "__main__":
    main()
else:
    print(__name__)
