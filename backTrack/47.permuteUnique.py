'''
Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
Date: 2024-08-13 09:17:59
LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
LastEditTime: 2024-08-13 09:18:15
FilePath: /MyLeetCodeStudy/backTrack/47.permuteUnique.py
Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
'''
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        res = []
        def backTrack(path, l):
            if len(path) == l:
                res.append(path)
                return
            
            for item in nums:
                



        return res
