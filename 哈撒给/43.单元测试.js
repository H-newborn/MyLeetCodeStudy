/*
 * @Author: This is CodeMan
 */
describe('11111', () => {
    beforeAll(() => {
        console.log('单元测试开始')
    })
    afterAll(() => {
        console.log('单元测试结束')
    })
    beforeEach(() => {
        console.log('每次单元测试开始')
    })
    afterEach(() => {
        console.log('每次单元测试结束')
    })
    it('test sum', () => {
        expect(sum(2,3)).toEqual(5)
    })
    it('test mutil', () => {
        expect(sum(2,3)).toEqual(5)
    })
})