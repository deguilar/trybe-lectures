db.burgers.updateOne(
  { cod: 1 },
  { $set: { preco: 7.00, entrega: 10.00 } }
);

db.burgers.updateOne(
  { cod: 2 },
  { $set: { preco: 7.50, entrega: 10.00 } }
);
  
db.burgers.updateOne(
  { cod: 3 },
  { $set: { preco: 8.00, entrega: 10.00 } }
);

db.burgers.updateOne(
  { cod: 4 },
  { $set: { preco: 8.50, entrega: 10.00 } }
);

db.burgers.updateOne(
  { cod: 5 },
  { $set: { preco: 12.00, entrega: 10.00 } }
);
