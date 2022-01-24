from turtle import Turtle, Screen


def hilbert_curve(n, turtle, angle=90):
    if n <= 0:
        return

    turtle.left(angle)
    hilbert_curve(n - 1, turtle, -angle)
    turtle.forward(1)
    turtle.right(angle)
    hilbert_curve(n - 1, turtle, angle)
    turtle.forward(1)
    hilbert_curve(n - 1, turtle, angle)
    turtle.right(angle)
    turtle.forward(1)
    hilbert_curve(n - 1, turtle, -angle)
    turtle.left(angle)


depth = 4
size = 16

screen = Screen()
screen.setworldcoordinates(0, 0, size, size)

donatello = Turtle("turtle")
donatello.speed("normal")
donatello.penup()
donatello.goto(0.5, 0.5)
donatello.pendown()

hilbert_curve(depth, donatello)
