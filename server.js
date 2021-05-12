const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express()

app.use(cors());
const port = 3000

var files = fs.readdirSync('images/');

const getFileByID = (id, thumbnail) => {
  return path.join(__dirname, `images/${thumbnail ? 'transform' : ''}generated-05-10-2021_13-51-24-${id}-ema.png`);
}

app.get('/image/:id/preview', (req, res) => {
  res.sendFile(getFileByID(req.params.id, true));
});

app.get('/image/:id/texture', (req, res) => {
  res.sendFile(getFileByID(req.params.id, false));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})