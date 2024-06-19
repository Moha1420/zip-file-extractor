const express = require('express');
const multer = require('multer');
const unzipper = require('unzipper');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
const upload = multer({ storage: storage });

// Upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
  const filePath = req.file.path;
  const extractPath = path.join(__dirname, 'extracted');

  fs.createReadStream(filePath)
    .pipe(unzipper.Extract({ path: extractPath }))
    .on('finish', () => {
      res.json({ message: 'File extracted successfully' });
    })
    .on('error', (err) => {
      console.error('Error extracting file:', err);
      res.status(500).json({ error: 'Failed to extract file' });
    });
});

// Serve static files
app.use(express.static('extracted'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
