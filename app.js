var csv = require('node-csv');
var fs = require('fs');
var file = fs.readFileSync('./cards.tsv', 'utf8');
var jsonfile = require('jsonfile');

var cards = [];

csv.parse(file, { strDelimiter: '\t' }, function (data) {
	cards.push({
		cost: data[2],
		description: data[1],
		name: data[0],
		type: data[3]
	})
});

jsonfile.writeFile('./cards.json', cards, { spaces: 4 }, function (err) {
	console.error(err);
	return 'error';
});

return 'success';