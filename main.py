#Take user input, Make computer random move 
import random

computerMove = random.choice([-1, 0, 1])
'''
-1 = Water
0 = Gun
1 = Snake
'''
playerInput = (input("Enter your move from swg: "))
playerDict = {
    "s": 1 ,
    "g": 0 ,
    "w": -1
}
inputDict = {
    1: "Snake" ,
    0: "Gun" ,
    -1: "Water"
}

playerMove = playerDict[playerInput]

print(f"You chose {inputDict[playerMove]}\nComputer chose {inputDict[computerMove]}")

if(computerMove == playerMove):
    print("It's a draw")
else:
    if(computerMove == 1 and playerMove == 0):
        print("You Win!!")
    elif(computerMove == 1 and playerMove == -1):
        print("You Lose!!")
    elif(computerMove == -1 and playerMove == 1):
        print("You Win!!")
    elif(computerMove == -1 and playerMove == 0):
        print("You Lose!!")
    elif(computerMove == 0 and playerMove == 1):
        print("You Win!!")
    elif(computerMove == 0 and playerMove == -1):
        print("You Lose!!")
    else:
        print("Something went wrong!")