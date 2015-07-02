/**
 * Created by M.Vyhovskyi on 7/2/2015.
 */

var expect = require('./util/expect');
var ds = require('../src/ds');

const readQuery = "match a->b->c return a";

describe("Data Space API",function(){
    describe("when querying data",function(){
        describe("and validates request first",function(){
            it("then applies string expressions only",function(){
               ds.ask(readQuery,function(){});
            });
            it("then throws if expression is not specified",function(){
                var ask = expect(function(){
                    ds.ask({something:"other than expression string"},function(){});
                });
                ask().to.throw(Error);
            })
        });
        it("checks callback is specified",function(){
            var ask = expect(function(){
                ds.ask(readQuery)
            });
            ask().to.throw(Error);
        });
        it("checks callback is not null",function(){
            var ask = expect(function(){
                ds.ask(readQuery,null)
            });
            ask().to.throw(Error);
        });
        it("checks callback is a function",function(){
            var ask = expect(function(){
                ds.ask(readQuery,"something except a callback");
            });
            ask().to.throw(Error);
        });
        it("performs request and callback after it's complete",function(done){
            ds.ask(readQuery,function(){
                done();
            });
        });
    });
});