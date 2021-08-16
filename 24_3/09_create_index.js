use test;

db.articles.drop()
db.articles.insertMany(
    [
        { _id: 1, subject: "coffee", author: "John Coffee", views: 50 },
        { _id: 2, subject: "Coffee Shopping", author: "Dennis Milk", views: 5 },
        { _id: 3, subject: "Baking a cake", author: "Harry Bread", views: 90  },
        { _id: 4, subject: "baking", author: "John Coffee", views: 100 },
        { _id: 5, subject: "Café Com Leite", author: "Harry Bread", views: 200 },
        { _id: 6, subject: "Сырники", author: "Jack Cappuccino", views: 80 },
        { _id: 7, subject: "coffee and cream", author: "Dennis Milk", views: 10 },
        { _id: 8, subject: "Cafe com Leite", author: "John Coffee", views: 10 }
    ]
)


// criando um índice
db.articles.createIndex({ subject: "text" })
// listando os índices
db.articles.getIndexes();
// criando um índice com nome
db.articles.createIndex({ subject: "text" }, { name: 'subject_index'})
// só é possível ter um índice por coleção
db.articles.createIndex({ author: "text" }, { name: 'author_index'})
// removendo um índice
db.articles.dropIndex('');

// ----- utilizando um índice -------

// Vamos listar todos os documentos que contenham coffee
db.articles.find({ $text: { $search: "coffee" } });
// Vamos listar todos os documentos que contenham bake, coffee OU cake
db.articles.find({ $text: { $search: "bake coffee cake" } })

// Vamos listar todos os documentos que contenham `coffee shop` exatamente nessa ordem
db.articles.find({ $text: { $search: "\"coffee shop\"" } })

// exibir o score do documento em relação a busca.
db.articles.find({ $text: { $search: "coffee" } },{ score: { $meta: "textScore" } })

// índices com múltiplos atributos
db.articles.createIndex(
	{ 
		subject: "text",
		author: 'text'
	}, 
	{ name: 'subject_and_author_index' }
);


// índices com múltiplos atributos com pesos específicos
db.articles.createIndex(
	{ author: "text", subject: 'text' }, 
	{ 
		weights: {
			subject: 2,
			author: 1,
		},
		name: 'subject_and_author_index'
	}
);