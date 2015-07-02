/**
 * Created by M.Vyhovskyi on 7/2/2015.
 */
var expect = require('./util/expect');
var ds = require('../src/ds');

describe("Data Space API",function(){
    describe("when query data",function(){
        it("validates request first");
        it("checks callback is specified",function(){
            var asking = function(){ds.ask("match a->b->c return a")};
            var ask = expect(asking);
            ask().to.throw(Error);
        });
        it("checks callback is not null",function(){
            var asking = function(){ds.ask("match a->b->c return a",null)};
            var ask = expect(asking);
            ask().to.throw(Error);
        });
        it("checks callback is a function",function(){
            var asking = function(){ds.ask("match a->b->c return a",123)};
            var ask = expect(asking);
            ask().to.throw(Error);
        });
        it("performs request and callback after it's complete");
    });
});