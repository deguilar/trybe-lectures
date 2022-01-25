
def doces_cristiano(candies, extra_candies):
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]

if __name__ == "__main__":
    print(doces_cristiano([2, 3, 5, 1, 3], 3))
    # Carol, Melo, Junior, Tulio e Marilia
    # 5       6      8     