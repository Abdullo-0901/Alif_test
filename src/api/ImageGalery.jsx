import React, { useState } from 'react';

const ImageUploader = () => {
  const [base64Image, setBase64Image] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      setBase64Image(base64);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {base64Image && (
        <img src={base64Image} alt="Uploaded" />
      )}
    </div>
  );
};

export default ImageUploader;