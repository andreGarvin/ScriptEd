# MIT, carnigie mellon unversity, northeastern university, columbia university 




# This is a different part of the code
"""
sentence = []
write = raw_input("write something: ")

if len(write) > 0:
    sentence.append(write)
    if len(sentence) > 0:
        for i in sentence:
            if  == "andre":
                print "worked"

"""
#impoerted the date libary
from datetime import *


#assigned function datetime.now() to a variablecalled "now".

now = datetime.now()


#used now and made subsection of it(month, day, and year).

current_day = now.day
current_month = now.month
current_year = now.year


#all the variables before this variable "time", i assinged them in this avriable and formatted it.
time = "%s/%s/%s" % (current_month,current_day,current_year)


#holds user name form the prompt/question
user_name = []


call_MICHEAL = raw_input()


if call_MICHEAL == "micheal" or call_MICHEAL == "MICHEAL":
    mainMenu() #calls the function option
else:
    print "Hello there my name is MICHEAL!"
    name = raw_input("what is your name: ")
    while True:
        # Fill in the condition (before the colon)
        if len(name) > 0:
            user_name.append(name) #saves the users name in a list. (NOTE TO SELF: change it to a dictionary.)!!!!
            print "Hey, how you doing %s" % user_name[0]
            print 
            break
        else:
            name = raw_input("I didnt get name, please re-enter your name: ")
            

def mainMenu():
    #dictionary of the avaible options to choice from
    choices = {
    'files': "*Files", 
    'organize': "*Organize", 
    'prioritize': "*Prioritize"
    }

    def option():
        print "Hey %s, what would you like to do:" % user_name[0]
        for i in choices:
            print choices[i]
    option()
    choice = raw_input("Input:")
    
    for word in choice:
        if word == "files" or word == "Files":
            print "got it"
        else:
            print "wrong"
mainMenu()






"""
    if len(choice) > 0:
        if choice == "file":
            return 0
        elif choice == "organize":
            return 0
        elif choice == "prioritize":
            return 0
        elif chocie == "main":
            print "main"
    else:
        print "I guess you must lonely, that could be the only reson why you called me."
    """

"""
phrase = "A bird in the hand..."

# Add your for loop
for char in phrase:
    if char == 'A' or char == 'a':
        print "X",
    else:
        print char,
"""

"""







    
    Input = raw_input("File name:")
    description = raw_input("Description:")
    
    def file():
        while 1 > 2:
            #put a comment here
            if len(Input) > 0 and len(description) > 0:
                return 0
                break
            else:
                #put a comment here
                try_again = raw_input("You did not type a file name or gave a description, would like to try again:")
                if len(try_again) > 0:
                    Input = raw_input("File name:")
                    description = raw_input("Description:")
                else:
                    #put a comment here
                    print 

        #put a comment here
        Files = {}

        def documentation(obj, detail):
        #for item in obj: #this would be good for list or dictionaries
            doc = "%s (%s)" % (obj, time)
            Files[doc] = detail
            if len(Files) > 0:
                print "File has succesfully been svaed and documented."
                print Files
            else:
                void = raw_input("Nothing was saved, would like to try again?")
                if void == "yes":
                    MICHEAL()
        documentation(Input, description)


        #put a comment here
        def anotherOne():
            print 
            anotherFile = raw_input("Would you like to save another file documentation: ")
            print 
            if (anotherFile == "no"):
                print Files
                print "All activty is done, have a great day!"
                print
            else:
                #put a comment here
                MICHEAL()
                
        #put a comment here
        anotherOne()
        
    #put a comment here
    file()
    
def MICHEAL():
    #put a comment here, alot of comments
    def organize():
        def dateManagement(sameDate):
            count = 0
            for item in sameDoc:
                if item == item:
                    ohter = item
                    count += 1
                    print "There is %d document that has the name as '%s'" % (count, item)
                    option = raw_input("would you like to delte this file: ")
                    if (option == "yes"):
                        deleteDoc = raw_input("Insert the name of the file that you want to delete: ")
                    if deleteDoc == "yes":
                        del file[deleteDoc]
                    elif option == "no":
                        print "Ok then, just to reminnd you you have %d files that are the same" % count
                else:
                    return 0
        dateManagement(files)
        print
    organize()
    
MICHEAL()