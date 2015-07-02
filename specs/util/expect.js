/**
 * Created by M.Vyhovskyi on 7/2/2015.
 */

var expect = require('chai').expect;

function e(q){
    return function(){
        return expect(q);
    }
}

module.exports = e;