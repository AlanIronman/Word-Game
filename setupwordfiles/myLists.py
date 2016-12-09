seven = open('seven.txt', 'w')
#treeUpToLessSeven = open('treeUpToLessSeven.txt', 'w')

with open('words.txt') as file:
    for word in file:
        if len(word) > 7 and len(word) < 10:
            seven.write(word.lower())
        #if len(word) > 3 and len(word) <= 7:
        #    treeUpToLessSeven.write(word.lower())

seven.close()
#treeUpToLessSeven.close()


