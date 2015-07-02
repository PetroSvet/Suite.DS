/**
 * Created by M.Vyhovskyi on 7/2/2015.
 */

const TypeQuery = "query";

function builder(expression){

    return {
        type: TypeQuery
    }
}

module.exports = builder;