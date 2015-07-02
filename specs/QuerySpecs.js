/**
 * Created by M.Vyhovskyi on 7/2/2015.
 */

var expect = require('./util/expect');

var buildQuery = require('../src/query/builder');

var readQuery = "match a->b->c when a.name='Max' return a";


describe("Query builder",function(){
   it("parse query from a string expression",function(){
       var instance = buildQuery(readQuery);
       var query = expect(instance);

       query().exists;
       query().has.property('type');
   })
});