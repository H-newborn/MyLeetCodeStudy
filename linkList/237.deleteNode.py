'''
Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
Date: 2024-08-21 09:26:14
LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
LastEditTime: 2024-08-21 09:26:20
FilePath: /MyLeetCodeStudy/linkList/237.deleteNode.py
Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        node.val = node.next.val
        node.next = node.next.next