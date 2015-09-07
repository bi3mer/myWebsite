#!/usr/bin/python
#colan
import csv
LINE_NUMBER = 3
DESIRED_FIELD = 2
with open('testfile.csv','rb') as csvfile:
	CSV = csv.reader(csvfile, delimiter=',', quotechar='|')
	CSV = list(CSV)
	field = CSV[LINE_NUMBER][DESIRED_FIELD]
	print field
