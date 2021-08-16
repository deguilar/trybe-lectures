// sem usar elemMatch
db.burgers.count({
  'comentarios.usuario': "Renato",
});
    
// usando elemMatch
db.burgers.count({
  comentarios: {
    $elemMatch: { usuario: 'Renato' }
  }
});

// sem usar elemMatch
db.burgers.count({
  'comentarios.usuario': "Renato",
	'comentarios.nota': { $lt: 5 } ,
});

// usando elemMatch
db.burgers.count({
  comentarios: {
    $elemMatch: { usuario: 'Renato', nota: { $lt: 5 } }
  }
})