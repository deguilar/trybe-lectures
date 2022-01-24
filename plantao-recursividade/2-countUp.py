def ContarUp(current_number):
    if current_number > 20:
        return "Acabou os números"

    resposta = f"Numero -> {current_number}\n"
    print(resposta)

    resposta += ContarUp(current_number + 1)
    return resposta


print("CONTARUP", ContarUp(1))
