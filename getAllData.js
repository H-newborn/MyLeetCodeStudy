/*
 * @Author: This is CodeMan
 */
// 有一个通用的图表组件，首先需要选择某一个数据表，把数据表的数据显示成柱状图。
// 数据表可以根据接口返回，接口接受limit和offset参数，返回total和list。
// limit最大支持1000，写一个函数，返回选择的数据表的所有数据（数据条数不限制）。

// 查询接口：get  /api/list。query：{ tableId, limit, offset }。 response: {list: [], total}
// function getALLData(tableId) {} // 尽量考虑时间问题

function getALLData(tableId) {
    let pageNo = 0
    let pageSize = 1000
    let totalList = []

    //  total/pagesize
    Promise.all([list, list2, list3])
    async function getList() {
            get({
                url: '/api/list',
                query: { tableId, limit: pageSize, offset: pageNo },
            }).then(response => {
                const { list, total } = response

                const objList = {
                    list: list,
                    pageNo: pageNo
                }
                // 将返回的列表数据拼接
                if (list.length > 0) {
                    totalList = totalList.concat(list)
                }

                // 如果数据
                if (totalList.length !== total) {
                    pageNo += pageSize
                    await getList()
                } 
            })
        
    }
    
    await getList()
    return totalList
}