// src/App.js

import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ExtractedFilesList from './components/ExtractedFilesList';
import './styles.css';

const App = () => {
  const [files, setFiles] = useState([]);

  const handleUploadComplete = (uploadedFiles) => {
    setFiles(uploadedFiles);
  };

  return (
    <div className="App">
      <h1>Zip File Extractor</h1>
      <FileUpload onUploadComplete={handleUploadComplete} />
      {files.length > 0 && <ExtractedFilesList files={files} />}
    </div>
  );
};

export default App;
