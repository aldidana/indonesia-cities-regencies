var list = require('./list.json');
var Fuse = require('fuse.js');

var options = {
  keys: [{
  	name: 'name',
  	weight: 0.7
  }, {
  	name: 'province',
  	weight: 0.3
  }]
};

var fuse = new Fuse(list, options);

function get (q, limit) {
	if (!limit) limit = 10;

	if (typeof limit !== 'number') throw new Error('Limit must be number');

	var result = fuse.search(q).splice(0, Number(limit));
	return result;
};

function getAll (limit) {;
	if (!limit) return list;

	if (typeof limit !== 'number') throw new Error('Limit must be number');

	var result = list.splice(0, Number(limit));
	return result;
};

module.exports = {
	get: get,
	getAll: getAll
};