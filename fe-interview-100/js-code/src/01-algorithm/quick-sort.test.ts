/**
 * 快速排序test
 */

import { quickSort1,quickSort2 } from "./quick-sort";

describe('快速排序',()=>{
    it("正常情况",()=>{
        const arr = [6,3,1,6,8,3,9]
        const res = quickSort2(arr)
        expect(res).toEqual([1, 3, 3, 6, 6, 8, 9])
    })
    it("有负数",()=>{
       const arr = [-5,0,-100,9]
       const res = quickSort2(arr)
       expect(res).toEqual([-100,-5,0,9])
    })
    it("数组元素全都一样",()=>{
        const arr = [5,5,5,5]
        const res = quickSort2(arr)
        expect(res).toEqual([5,5,5,5])
    })
    it("空数组",()=>{
        const arr:any[] = []
        const res = quickSort2(arr)
        expect(res).toEqual([])
    })
})