let list = require('./list.json')
const Fuse = require('fuse.js')
const e = {
    nan: (field) => new Error(`NaN - \`${field}\` must be a number`)
}

const fuzzy = new Fuse(list, {
    shouldSort: true,
    tokenize: true,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: [{
        name: 'name',
        weight: 0.9
    }, {
        name: 'province',
        weight: 0.01
    }]
})

/**
 * get filtered list with specific query, implemented from [fuse js]{@link http://fusejs.io}
 * @param {String} q query to search
 * @param {Number} limit Limit in number, default to 10, negative
 * @returns {Array<Object>} List
 */
const get = (q = '', limit = 10) => {

    if (typeof limit !== 'number') {
        throw e.nan('limit')
    }

    // use fuzzy if there is a `q`, all if q is falsy
    const result = q ? fuzzy.search(q) : list

    // splice if limit is positive, all if limit is zero & negative
    return limit > 0 ? [...result].splice(0, Number(limit)) : result
}

/**
 * getAll return all cities/regencies
 * @returns {Array<Object>} List
 */
const getAll = () => list

module.exports = {
    get,
    getAll
}
