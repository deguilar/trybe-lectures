carros=["fusca","gol","brasilia","ferrari","variant","fusca","gol","brasilia","ferrari","variant","fusca","gol","brasilia","ferrari","variant"]

itCarros=iter(carros)

while itCarros:
    try:
        print(next(itCarros))
    except StopIteration:
        print("acabou a bagaceira toda")
        break















# iteração entre iter e next se faz unitária, 1 de cada vez
