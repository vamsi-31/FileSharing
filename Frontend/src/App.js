
import React, { useState, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  TextField, 
  LinearProgress 
} from '@mui/material';
import { uploadFile } from './service/api';
function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef();

  const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    const uploadImage = async () => {
      if (file) {
        setLoading(true);
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        try {
          const response = await uploadFile(data);
          setResult(response.path);
        } catch (error) {
          console.error(error);
          // Handle upload error
        } finally {
          setLoading(false);
        }
      }
    };
    uploadImage();
  }, [file]);

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        backgroundColor: '#f5f5f5' 
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Simple File Sharing
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Upload and share the download link.
      </Typography>
      <Button 
        variant="contained" 
        onClick={handleUploadClick} 
        disabled={loading}
      >
        Upload
      </Button>
      <input 
        type="file" 
        ref={fileInputRef} 
        style={{ display: 'none' }} 
        onChange={handleFileChange} 
      />
      {loading && <LinearProgress sx={{ mt: 2 }} />}
      {result && (
        <TextField 
          value={result} 
          label="Download Link" 
          variant="outlined" 
          sx={{ mt: 2, width: '300px' }} 
          InputProps={{
            readOnly: true,
          }}
        />
      )}
    </Box>
  );
}

export default App;