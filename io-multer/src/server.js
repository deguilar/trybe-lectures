const express = require('express');
const path = require('path');
const multer = require('multer');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

console.log(__dirname);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));


const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads')
  },
  filename:  (req, file, callback) => {
    callback(null, `${req.params.id}-${file.originalname}`)
  },
})

// const upload = multer({ dest: path.join(__dirname, '..', 'uploads')});
const upload = multer({ storage })

app.post('/file/upload', upload.single('file'), 
  (req, res) => {
  res.send({ files: req.files, body: req.body });
});

app.post('/user/:id/avatar', upload.single('avatar'), 
  (req, res) => {
  res.send({ files: req.files, body: req.body });
});


app.listen(3001);