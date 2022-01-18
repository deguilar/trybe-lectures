# situação 1

def insertion_sort(array):      # função que lê o array por conpleto

    for i in range(len(array)):     # len para ter os elementos que vamos trabalhar,iterar no comprimento sem
                                    # sem alterar nada, no mesmo espaço de memória
                                    # detalhe eu vou iterar dentro do próprio array, não irei inserir e nem apagar
        valor_atual = array[i]      # valor que pega a posição atual no array, percorre todo o array posi a posição
        posicao_atual = i          #  recebe e o valor que i representa no array nesse momento
                                  # test = [1, 3, 5]
                                  # test = [3, 6, 1]
        while (             # while para verificação da analise, no caso iniciamos verificando 2 situações
            posicao_atual > 0  # se inicar em 0 verirficar o elemento da posição 1 e 2
            and array[posicao_atual - 1] > valor_atual   # verificação do primeiro numero para verifica caso
        ):
            array[posicao_atual] = array[posicao_atual - 1] # 
            posicao_atual = posicao_atual - 1


        array[posicao_atual] = valor_atual
    return array


def progressao_aritmetica(nums):    # passeia no array vendo quem é maior que quem e ja sabe se é true ou false
    insertion_sort(nums)        #  método nativo do python para realziar a ordenação

    diferenca_comum = nums[1] - nums[0]  # para saber a diferença entre o segundo elemento e o primeiro e saber a diferença
    for index in range(1, len(nums)): # iniciar pelo menos em 1 porque se for zero ja mata o caso e da falso
        if nums[index] - nums[index - 1] != diferenca_comum: # saber se diferença esta igual a diferença comum
            return False  # se triver diferente retorne false
    return True  #  se for ordenado retorne true


    test1 = [1, 3, 5]                           # saída: True
    test2 = [3, 6, 1]                           # saída: False
    test3 = [7, 43, 19, 25, 1, 31, 37, 13]      # saída: True
    test4 = [7, 43, 19, 25, 1, 32, 37, 13]      # saída: False
    test5 = [1, 2]                              # saída: True
    print(f"Entrada {test1} Saída: {progressao_aritmetica(test1)}.")
    print(f"Entrada {test2} Saída: {progressao_aritmetica(test2)}.")
    print(f"Entrada {test3} Saída: {progressao_aritmetica(test3)}.")
    print(f"Entrada {test4} Saída: {progressao_aritmetica(test4)}.")
    print(f"Entrada {test5} Saída: {progressao_aritmetica(test5)}.")



    ### Dá pra resolver em 7 linhas



def progressao_aritmetica(nums):
    nums.sort()

    diferenca_comum = nums[1] - nums[0]
    for index in range(1, len(nums)):
        if nums[index] - nums[index - 1] != diferenca_comum:
            return False
    return True











# situação 2


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

    teste4 = [1, 3, 5, 6]
    alvo4 = 0
    # saída: 0
    print(f"Posição a ser inserido {search_insert(teste4, alvo4)}")




# situação 3


def count_negatives(matriz):
    contador = 0

    for fileira in matriz:  # rodar as linhas da matriz
        for valor_coluna in fileira: # rodar as colunas da matriz
            if valor_coluna < 0: # encontrar os elementos negativos, no caso menor que 0
                contador += 1 # encrementa um contador e retorna o contaro e fim de papo

    return contador


teste1 = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]
print(f"Entrada: {teste1}, Saída: {count_negatives(teste1)}")
# saída: 8

teste2 = [[3, 2], [1, 0]]
print(f"Entrada: {teste2}, Saída: {count_negatives(teste2)}")
# saída: 0

teste3 = [[1, -1], [-1, -1]]
print(f"Entrada: {teste3}, Saída: {count_negatives(teste3)}")
# saída: 3

teste4 = [[-1]]
print(f"Entrada: {teste4}, Saída: {count_negatives(teste4)}")
# saída: 1




