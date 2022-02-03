from stack import Stack


def is_valid(string):
    stack = Stack()
    """Verifica se a string passada como parâmetro é divisível por 2.
    Caso não seja, ela não esta balanceada, ou seja, não possui a
    quantidade adequada de abre e fecha parênteses, por exemplo."""
    if len(string) % 2 != 0:       # em tese se abrir e fechar tem pelos menos dois se for impar alguém não fechou
        return False    

    for char in string:     # criar um loop para passar por todos os caracteres lançados
        if char not in ['(', '[', '{', ')', ']', '}']:  # possibildiade de simbolos de uso
            return False    # retorna falso se o simbolo não estiver nessa lista

        """O primeiro processamento a ser feito é verificar se o carácter é
        algum dos caracteres de abertura."""
        if char in ['(', '[', '{']:
            # Caso seja adicione-o na pilha
            stack.push(char)    # damos um push para empilhar o elemento
            # se meu simbolo não for ) e não estiver vazia e o simbolo final for (
        elif char == ')' and not stack.is_empty() and stack.peek() == '(':
            stack.pop() # dou um pop para remover de cima da pilha e manter o controle do que entra
        elif char == ']' and not stack.is_empty() and stack.peek() == '[':
            stack.pop()
        elif char == '}' and not stack.is_empty() and stack.peek() == '{':
            stack.pop()

    return stack.is_empty() # retorna pra mim se esta vazia ou não 
                            # senão estiver vazia alguem não fechou / se estiver vazia todo mundo fechou


print(is_valid('()'))  # True
print(is_valid('{)'))  # False    - chaves com parenteses
print(is_valid('()[]{}'))  # True
print(is_valid('(]'))  # False
print(is_valid('([)]'))  # False        - colchetes com parenteses
print(is_valid('{[]}'))  # True
print(is_valid('{{}[][[[]]]}'))  # True
print(is_valid('{{({})}}'))  # True
print(is_valid('[[[]]]'))  # True
print(is_valid('())'))  # False