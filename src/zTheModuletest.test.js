import { describe, it } from 'node:test'
import { theModuleSum, theModuleGetData } from './module.js'

describe("tests module", () => {
    it('should correctly test sum', (t) => {
        t.assert.deepStrictEqual(theModuleSum(1,1),2)
    })

    it('should test getData', (t) => {
        t.assert.deepStrictEqual(theModuleGetData(), {type : 'object'})
    })
})