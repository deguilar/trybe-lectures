from turtle import Turtle, Screen

depth = 5

screen = Screen()
screen.setworldcoordinates(0, 0, 35, 35)

donatello = Turtle("turtle")

donatello.penup()
donatello.goto(1, 1)
donatello.pendown()
donatello.speed("slowest")
donatello.left(90)
donatello.forward(30)

donatello.right(90)
donatello.forward(30)

donatello.right(90)
donatello.forward(30)

donatello.right(90)
donatello.forward(30)

curve(depth, donatello)
