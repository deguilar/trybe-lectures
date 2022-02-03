from stack import Stack


def calculate_points(rounds):       #  verificar se primeira rodada é D C +, num tem nada pa somar retorna none
    if len(rounds) == 1 and rounds[0] in ['D', 'C', '+']: # ver se primeiro elemento atende linha ainterior
        return None # retorna none se for caractere e não numero

    stack = Stack() # 
    for game_round in rounds: # loop para iterar os rodadas jogadas
        if game_round == '': # verifica se esta vazia a rodada
            return None # retorna none como tratamento

        if game_round == '+': # soma as duas rodadas anteriores
            """Na implementação da regra, removemos os dois últimos valores
            da pilha para podermos soma-los e descobrir o valor da rodada
            atual. Então empilhamos os valores removidos, de tal forma que
            fiquem na mesma ordem, e então nós empilhamos o valor da
            rodada atual."""
            last_round = stack.pop() # remove do topo da pilha para saber o valor
            penultimate_round = stack.pop() # depois remove o penultimo valor para soma-los
            current_round = penultimate_round + last_round # current recebe a soma dos dois ultimos numeros
                        # após isso empilhamos os valores na pilha como antes
            stack.push(penultimate_round) #  no caso insere o penultimo valor
            stack.push(last_round) # insere o ultimo valor
            stack.push(current_round)  # e joga o valor de current 

        elif game_round == 'D':   # situação de dobrar valor 
            """No cálculo dessa regra, não será necessário remover o
            valor da pilha. Nós conseguimos utilizar o método `peek`
            para ler o valor da última rodada."""
            last_round = stack.peek() # só olha que esta noi topo da pilha
            current_round = last_round * 2 # multiplica o valor por 2 

            stack.push(current_round) # empilha o valor multiplicado por 2 com o push
        elif game_round == 'C': # limpa os pontos da ultima jogada valida
            """Regra para remover os pontos da última rodada"""
            stack.pop()
        else:  # marcar os pontos jogados
            """A última regra consiste em converter a string contendo
            um número em pontos para podermos somar os pontos depois de
            calcular todas as rodadas."""
            stack.push(int(game_round)) # diminui o valor inteiro da ultima jogada

    """É necessário fazermos o somatório dos pontos para descobrir o valor total
    de pontos durante a partida. Para fazer o somatório, vamos criar uma
    variável chamada `total` e então iterar na pilha até que ela esteja
    vazia, somando o total de pontos de cada item na fila, para retornarmos
    o total de pontos. Neste ponto ela deve somente conter números."""
    total = 0 # total inicia em zero para receber valores desempilhados
    while not stack.is_empty(): # se minha pilha não esta vazia
        total += stack.pop() # vai removendo os valores da pilha e somando conforme as passadas por cada elemento

    return total # retorna o valor total tirado do empilhamento


print(calculate_points(['1', '2', '+', 'D', 'C']))  # 6
print(calculate_points(['5', '2', 'C', 'D', '+']))  # 30
print(calculate_points(['5', '-2', '4', 'C', 'D', '9', '+', '+']))  # 27