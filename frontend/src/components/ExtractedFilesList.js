// src/components/ExtractedFilesList.js

import React from 'react';

const ExtractedFilesList = ({ files }) => {
  return (
    <div className="extracted-files-list">
      <h2>Extracted Files</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExtractedFilesList;
