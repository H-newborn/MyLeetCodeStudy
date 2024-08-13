'''
Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
Date: 2024-08-13 09:05:49
LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
LastEditTime: 2024-08-13 09:06:24
FilePath: /MyLeetCodeStudy/backTrack/78.subsets.py
Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
'''
class Solution:
    def subsets(self, nums):
        res = []
        def backTrack(path, l):
            if len(path) == l:
                res.append(path)
                return
            for item in nums:
                if len(path) > 0:
                    if item > path[len(path) - 1]:
                        backTrack(path + [item], l)
                else:
                    backTrack([item], l)
                

        for index in range(len(nums) + 1):
            backTrack([], index)

        return res