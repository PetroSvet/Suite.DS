/**
 * Created by M.Vyhovskyi on 7/2/2015.
 */

function verifyCallbackIsSpecified(cb){
    if(cb == 'undefined' ||
        cb == null ||
        !(cb instanceof Function)){
        throw Error('A query callback is undefined');
    }
}

function verifyExpression (expression) {
    if(typeof expression !== 'string'){
        throw Error("An expression should be a valid query string");
    }
}

function ask(expression, cb){
    verifyCallbackIsSpecified(cb);
    verifyExpression(expression);
    cb(null);
}

module.exports = {
    ask: ask
};