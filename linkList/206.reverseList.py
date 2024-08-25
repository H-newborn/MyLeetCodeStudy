'''
Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
Date: 2024-08-21 10:02:00
LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
LastEditTime: 2024-08-21 10:02:08
FilePath: /MyLeetCodeStudy/linkList/206.reverseList.py
Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
'''
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head
        prev = None
        while curr is not None:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        return prev
        