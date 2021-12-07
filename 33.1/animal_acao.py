import animal_estimacao as animal

lulu = animal.AnimalEstimacao('Lulu', 'cão', 'Alice')
print('Meu nome é:', lulu.nome, 'eu sou um', lulu.especie, 'e meu dono é:', lulu.dono)
lulu.correr()
print()

chile = animal.AnimalEstimacao('Chile', 'gato', 'Luís')
print('Meu nome é:', chile.nome, 'eu sou um', chile.especie, 'e meu dono é:', chile.dono)
chile.brincar()



