db.burgers.find(
  { ingredientes: { $all: ['pão', 'alface', 'tomate', 'carne']} }
);

// a ordem não influencia a busca
db.burgers.find(
  { ingredientes: { $all: ['frango', 'pão', 'alface']} }
);


// Importante diferenciar o $all do $in
// $all - tem que ter todos
// $in - tem que ter pelo menos um
db.burgers.find(
  { ingredientes: { $all: ['frango', 'pão', 'alface']} }
);

