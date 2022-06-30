/**
 * @description 括号匹配
 */

import { matchBracket } from './match-bracket'
describe( '括号匹配', () => {
    // it( "正常情况", () => {
    //     const str = '{a(b[c]d)e}f'
    //     const res = matchBracket( str )
    //     expect(res).toBe(true)
    // } )
    
    it( "不匹配", () => {
        const str = '{a(b[)c]d)e}f'
        const res = matchBracket( str )
        expect(res).toBe(true)
    } )
    
    // it( "顺序不一致", () => {
    //     const str = '{a(b[c]d}e)f'
    //     const res = matchBracket( str )
    //     expect(res).toBe(true)
    //  })
     
    // it( "空字符串", () => {
    //     const res = matchBracket('')
    //     expect(res).toBe(true)
    //  })
 })