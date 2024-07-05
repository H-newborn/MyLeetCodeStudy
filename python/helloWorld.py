# -*- coding: utf-8 -*-
# name = input("what is your name?")
# print('hello \n world')
# print(name)

# String
first = 'a'
second = 'b'
output = 'hello,{0}{1}'.format(first, second)
# output1 = f'hello,{first}{second}' python 3.X
# print(output, output1)

# number&string
num1 = 1
str1 = 'srt'
print(str(num1) + str1)

# Date
from datetime import datetime, timedelta
current_data = datetime.now()
print('Today is:' + str(current_data))

one_day = timedelta(days=1)
yesterday = current_data - one_day
print('Yesterday is:' + str(yesterday.month) + '月' + str(yesterday.day))

# if or and
price = 1
price2 = 2
price2IsTrue = False
if price2 > price:
    print('price 2 is ok')
    price2IsTrue = True
elif price > 1:
    print('hahaha')
else:
    price2IsTrue = False
    print('price 1 is ok')

if(price in (1,2,3)):
    print('aaaaaa')

if(price2IsTrue):
    print('everything is ok')

# 列表 数组 字典
names = []
names.append('Bob')
names.append('aaaa')

from array import array

scores = array('B')
scores.append(1)
scores.append(2)
print(scores)

person = {}
person['first'] = 'Chris'
person['second'] = 'Harrs'

# for
for name in ['aaaa', 'bbb']:
    print(name)


# fn
def print_time() :
    print(datetime.now())

print_time()

# module
# import helpers
# helpers.display()

def logger(func):
    def wrapper():
        print('1111')
        func()
        print('12223')
    func()
    return wrapper

@logger
def sample():
    print(888888)

sample()