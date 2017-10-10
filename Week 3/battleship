import random
computerShip = random.randint(1, 9)

def printGraphic(name):
    if (name == "title"):
        print  ' ______   _______ __________________ _        _______  _______          _________ _______ ' 
        print  '(  ___ \ (  ___  )\__   __/\__   __/( \      (  ____ \(  ____ \|\     /|\__   __/(  ____ )'
        print  '| (   ) )| (   ) |   ) (      ) (   | (      | (    \/| (    \/| )   ( |   ) (   | (    )|'
        print  '| (__/ / | (___) |   | |      | |   | |      | (__    | (_____ | (___) |   | |   | (____)|'
        print  '|  __ (  |  ___  |   | |      | |   | |      |  __)   (_____  )|  ___  |   | |   |  _____)'
        print  '| (  \ \ | (   ) |   | |      | |   | |      | (            ) || (   ) |   | |   | (      '
        print  '| )___) )| )   ( |   | |      | |   | (____/\| (____/\/\____) || )   ( |___) (___| )      '      
        print  '|/ \___/ |/     \|   )_(      )_(   (_______/(_______/\_______)|/     \|\_______/|/       ' 
        print  '__________________________________________________________________________________________'    

    if (name == "win"):
        print '                  _\____                    '
        print '                 |_===__`.        ==/       '
        print '                 \/    ---\ _ _ _ _/        '
        print '           ______/_______/_|_|_|_|_|        '
        print '          |--------------------==.          '
        print '          \____________________./           '
        print '                                            '
        print '     )    )                     (        )  '
        print '  ( /( ( /(           (  (      )\ )  ( /(  '
        print '  )\()))\())     (    )\))(    (()/(  )\()) '
        print ' ((_)\((_)\      )\  ((_)()\ )  /(_))((_)\  '
        print '   ((_) ((_)  _ ((_) _(())\_)()(_))   _((_) '
        print '\ \ / // _ \ | | | | \ \((_)/ /|_ _| | \| | '
        print ' \ V /| (_) || |_| |  \ \/\/ /  | |  | .` | '
        print '  |_|  \___/  \___/    \_/\_/  |___| |_|\_| '

    if (name == "missed"):
        print '                '
        print '   __ \ / __    '
        print '  /  \ | /  \   '
        print '      \|/       '
        print ' _,.---v---._   '    
                                            
    if (name == "game over"):
        print ' _______  _______  _______  _______    _______           _______  _______ '
        print '(  ____ \(  ___  )(       )(  ____ \  (  ___  )|\     /|(  ____ \(  ____ )'
        print '| (    \/| (   ) || () () || (    \/  | (   ) || )   ( || (    \/| (    )|'
        print '| |      | (___) || || || || (__      | |   | || |   | || (__    | (____)|'
        print '| | ____ |  ___  || |(_)| ||  __)     | |   | |( (   ) )|  __)   |     __)'
        print '| | \_  )| (   ) || |   | || (        | |   | | \ \_/ / | (      | (\ (   '
        print '| (___) || )   ( || )   ( || (____/\  | (___) |  \   /  | (____/\| ) \ \__'
        print '(_______)|/     \||/     \|(_______/  (_______)   \_/   (_______/|/   \__/'

def introStory():
    # let's introduce them to our world
    # intro story
    print "Welcome to Battleship"
    player = raw_input("Please enter your name >")
    print "Let's play " + player + "!"

def youWin():
	printGraphic("win")
	
	print "You're my hero!"

def youMissed ():
	printGraphic("missed")
	
	print "You can do better. Try again."

def gameOver():
	printGraphic("game over")

	print "Better luck next time, sucker!"

def game():
    count = 0
    while (count < 3): 
        choice = raw_input("Choose a number between 1 to 9 >")#first we'll start simple! After we add the letter to ask a coordinate.
        print choice
        if (computerShip == int(choice)):
            youWin()
            break
     
        count +=1
        if (count == 3):
        	gameOver()
            
        else: 
            youMissed()

   
def main():
    printGraphic("title") # call the function to print a logo
    introStory() # start the intro
    game()

main()

