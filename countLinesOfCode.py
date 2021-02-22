import os
import glob


def count_lines_of_code_in_file(name):
    print(sum(1 for line in open('quellen.txt')))



#get all files rekursiv from current working dir
all_file_names= glob.glob("./**",recursive=True)
#filer by filetypes
count_files = [f for f in all_file_names if 
(".js" in f or 
".mjs" in f or
".html" in f or
".css" in f
)]
count=0
#Count lines of code
for file in count_files:
    count += sum(1 for line in open(file))

print(str(count)+" lines of code in "+ str(len(count_files))+" files." )


wait = input("press enter")
