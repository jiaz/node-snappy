// simple, and somewhat stupid example

snappy = require('./snappy')

console.log(
	snappy.decompress(
		snappy.compress({"foo": "bar"})
	)
);

comp = snappy.compress("foo foo foo  Fasfa daos asd foo foo foo asdasf bar bar aarr");
base64 = comp.toString('base64');
comp2 = new Buffer(base64, 'base64');
console.log(snappy.uncompress(comp2));
console.log(
	snappy.decompress(
		snappy.compress(
			"foobar foobar foobar foobar foobar foobar foobar foobar foobar"
		)
	)
);