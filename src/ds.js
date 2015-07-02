/**
 * Created by M.Vyhovskyi on 7/2/2015.
 */

function ask(query, cb){
    if(cb == 'undefined' ||
       cb == null ||
       !(cb instanceof Function)){
        throw Error('A query callback is undefined');
    }
}

module.exports = {
    ask: ask
}