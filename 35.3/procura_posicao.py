""" Dado um array ordenado e um número alvo, retorne o índice caso o alvo seja encontrado, 
senão retorne o índice onde o alvo deve ser inserido. Você pode assumir que não teremos valores duplicados. """

# Ou pega do meio pra frente ou do inicio para o meio a posição9 alvo

def search_insert(numero, alvo): 

        menor_posicao, maior_posicao = 0, len(numero)  # inicia zerado e saber numeros do array

        while menor_posicao < maior_posicao:
            meio_array = (menor_posicao + maior_posicao) // 2 #  quebra o array para ajudar na busca

            if numero[meio_array] < alvo: # se o array é menor que o alvo cai pra baixo da metade
                menor_posicao = meio_array + 1
            else:
                maior_posicao = meio_array # se for maior cai pra cima da metade

        return menor_posicao


if __name__ == "__main__":
    teste1 = [1, 3, 5, 6]
    alvo1 = 5
    # saída: 2
    print(f"Posição a ser inserido {search_insert(teste1, alvo1)}")

    teste2 = [1, 3, 5, 6]
    alvo2 = 2
    # saída: 1
    print(f"Posição a ser inserido {search_insert(teste2, alvo2)}")

    teste3 = [1, 3, 5, 6]
    alvo3 = 7
    # saída: 4
    print(f"Posição a ser inserido {search_insert(teste3, alvo3)}")

    teste4 = [1, 3, 5, 6, 6, 7, 13, 27]
    alvo4 = 7
    # saída: 
    print(f"Posição a ser inserido {search_insert(teste4, alvo4)}")
