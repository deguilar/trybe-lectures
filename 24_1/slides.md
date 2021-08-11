---
theme: "night"
transition: "slide"
title: "MongoDB - Update Simples"
highlightTheme: "monokai"
enableMenu: false
enableSearch: false
enableChalkboard: false
---

### BLOCO 24 DIA 1 - MongoDB: Updates Simples

---

### O que será feito hoje?

* Vamos aprender a atualizar documentos no MongoDB
* `updateOne()` & `updateMany()` 
* Operadores: `$set`, `$mul`, `$inc`, `$min`, `$max`, `$currentDate`, `$rename` e `$unset`

---

### Relembrando: MongoDB Design

![](https://docs.mongodb.com/manual/images/replica-set-primary-with-two-secondaries.bakedsvg.svg)

---

### updateOne()

```javascript
db.collection.updateOne(
  { property: "SearchValue" },
  {
    $set: {
      property: "NewValue",
      other: "OtherValue",
      ...
    }
  }
);
```

---

### updateMany()

```javascript
db.collection.updateMany(
  { property: "SearchValue" },
  {
    $set: {
      property: "NewValue",
      other: "OtherValue",
      ...
    }
  }
);
```

---

### Dúvidas?

---

### Campo `_id`

`ObjectId("611417b3a406b9f37f434dfc")`

* Único
* Obrigatório
* Hexadecimal de 12 bytes:
    * 4 bytes `timestamp` em `Unix epoch`
    * 5 bytes aleatórios
    * 3 bytes contador incremental

---

### Upsert

```javascript
db.collection.updateOne(
  { property: "SearchValue" },
  {
    $set: {
      property: "NewValue",
    }
  },
  { upsert: true }
);
```

---

### $set

Como o `$set` se comporta em níveis mais profundos de aninhamento? Nível 1, 2, 3... N

---

### `$mul`, `$inc`

---

### Dúvidas?

---

### `$min`, `$max`

---

### Dúvidas?

---

### `$currentDate`

* Formato: yyyy-MM-dd'T'HH:mm:ss.SSSXXX 
* Ex: `ISODate("2021-08-11T20:21:36.502Z")`

---

### `$rename`, `$unset`

---

### Dúvidas?

---

### `update()`

* Semelhante ao `updateOne()`
* Deprecated: não utilizá-lo

---

### FIM! 
(por agora)