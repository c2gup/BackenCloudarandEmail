# CodeHelp File Upload App

This repository contains an application for uploading files to both a local server and Cloudinary, with support for image files. It also includes a feature to notify users via email when a file is uploaded.

## Features

- **Local File Upload**: Upload files to a local server.
- **Cloudinary Integration**: Upload images to Cloudinary.
- **Email Notification**: Users are notified via email when a file is uploaded.
- **Postman API**: Easily interact with the application via Postman for file upload.

## Setup Instructions

1. **Clone the Repository**: 
    ```bash
    git clone https://github.com/c2gup/BackenCloudarandEmail.git
    ```

2. **Install Dependencies**:
    ```bash
    cd codehelp-file-upload
    npm install
    ```

3. **Environment Variables**:
    Create a `.env` file based on the `.env.example` and fill in necessary values.

4. **Start the Server**:
    ```bash
    npm start
    ```

## API Endpoints

### 1. Local File Upload

- **Endpoint**: `POST /api/v1/upload/local`
- **Description**: Upload a file to the local server.
- **Parameters**:
    - `file`: The file to be uploaded.
- **Response**:
    - `success`: Indicates if the upload was successful.
    - `message`: A message indicating the status of the upload.

### 2. Image Upload to Cloudinary

- **Endpoint**: `POST /api/v1/upload/image`
- **Description**: Upload an image file to Cloudinary.
- **Parameters**:
    - `name`: Name of the uploader.
    - `tags`: Tags associated with the image.
    - `email`: Email of the uploader.
    - `imageFile`: The image file to be uploaded.
- **Response**:
    - `success`: Indicates if the upload was successful.
    - `imageUrl`: URL of the uploaded image.
    - `message`: A message indicating the status of the upload.

## Using Postman

1. Open Postman.
2. Set the HTTP method to `POST`.
3. Enter the appropriate endpoint URL based on the desired functionality (`/api/v1/upload/local` for local file upload and `/api/v1/upload/image` for image upload).
4. Set the request body as `form-data`.
5. Add the required parameters (`file` for local file upload and `name`, `tags`, `email`, and `imageFile` for image upload).
6. Execute the request.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

**CodeHelp** - Empowering developers with efficient file upload solutions.
