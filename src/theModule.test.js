import { describe, it, mock, } from "node:test";

describe('module test with mock', async () => {

    mock.module('./sum.js', {
        namedExports: {
            sum: (a, b) => 1,
            getData: () => ({})
        }   
    })

    const {theModuleSum,theModuleGetData} = await import('./module.js')

    it('tests correct thing', (t) => {
        t.assert.deepStrictEqual(theModuleSum(1,2),1)
        t.assert.deepStrictEqual(theModuleGetData(), {})
    })
})