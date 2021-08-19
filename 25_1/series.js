use('seriesDB');

db.series.drop();

db.series.insertMany([
  { '_id': 1, 'nome': 'Lost', 'ano': 2004, 'genero': 'Drama' },
	{ '_id': 2, 'nome': 'The Office', 'ano': 2005, 'genero': 'Comédia' },
	{ '_id': 3, 'nome': 'Game of Thrones', 'ano': 2009, 'genero': 'Fantasia' },
	{ '_id': 4, 'nome': 'Brooklyn 99', 'ano': 2013, 'genero': 'Comédia' },
	{ '_id': 5, 'nome': 'HIMYM', 'ano': 2005, 'genero': 'Comédia' },
	{ '_id': 6, 'nome': 'Grey`s Anotomy', 'ano': 2005, 'genero': 'Drama' },
]);

db.series.find();

// Run a find command to view items sold on April 4th, 2014.
db.series.aggregate([
	{ $group: { _id: '$genero'} }
]);
