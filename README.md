
# Simple File Sharing Application

This is a simple file-sharing application built with React and Express.  
It allows users to upload files and share the download link with others.  
Features  
.Upload files to the server  
.Generate a download link for uploaded files  
.Track the number of downloads for each file  
.Visually appealing frontend built with Material UI  
Technologies Used  
Frontend: React, Material UI  
Backend: Express, Node.js, MongoDB
## Installation and Setup

Prerequisites:
Node.js and npm installed on your machine.  
MongoDB installed and running.

```bash
  git clone https://github.com/vamsi-31/FileSharing
```

Go to the project directory

```bash
  cd File-Sharing
```

Install dependencies

```bash
  npm install
```
```bash
  cd FrontEnd
  npm start
```
Create a .env file in the root directory and add the following variables:  
```bash  
DB_USERNAME=your_mongodb_username  
DB_PASSWORD=your_mongodb_password
```  
Start the server

```bash
  cd BackEnd
  npm run start
```
# Usage
Open http://localhost:3000 in your browser.  
Click the "Upload" button and select a file to upload.  
Once the upload is complete, a download link will be displayed.  
Share the download link with others to allow them to download the file.  

## Contributing

Contributions are highly valued! If you have ideas for new features, bug fixes, or enhancements, please feel free to submit a pull request.
License
This project is licensed under the MIT License.
Known Issues and Limitations
Mobile Device Compatibility: The application may not be fully functional on mobile devices due to limitations in touch input and screen size.
Performance on Large Canvases: Performance may be impacted when working with very large canvases.

## Additional Notes
For optimal performance, it is recommended to use the application on a desktop or laptop computer.
If you encounter any issues or have any questions, please feel free to create an issue on the GitHub repository.

