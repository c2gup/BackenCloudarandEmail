const File = require("../models/fileschema");
const cloudinary = require("cloudinary").v2;


exports.localFileUpload = async(req,res)=>{

   try {

      const file = req.files.file;
      console.log("FILE AAGYI JEE -> ",file);

        //create path where file need to be stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH-> ", path)

        //add path to the move fucntion
        file.mv(path , (err) => {
            console.log(err);
        });
  
         //create a successful response
         res.json({
            success:true,
            message:'Local File Uploaded Successfully',
        });
      
   } catch (error) {
      console.log("Not able to upload the file on server")
      console.log(error);
   }

}

function isFileTypeSupported(type, supportedTypes) {
      return supportedTypes.includes(type);
  }
  
  async function uploadFileToCloudinary(file, folder, quality) {
      const options = {folder};
      console.log("temp file path", file.tempFilePath);
  
      if(quality) {
          options.quality = quality;
      }
  
      options.resource_type = "auto";
      return await cloudinary.uploader.upload(file.tempFilePath, options);
  }

exports.imageUpload = async (req, res) => {
      try{
          //data fetch
          const { name, tags, email} = req.body;
          console.log(name,tags,email);
  
          const file = req.files.imageFile;
          console.log(file);
  
          //Validation
          const supportedTypes = ["jpg", "jpeg", "png"];
          const fileType = file.name.split('.')[1].toLowerCase();
          console.log("File Type:", fileType);
  
          if(!isFileTypeSupported(fileType, supportedTypes)) {
              return res.status(400).json({
                  success:false,
                  message:'File format not supported',
              })
          }
  
          //file format supported hai
          console.log("Uploading to Codehelp");
          const response = await uploadFileToCloudinary(file, "Codehelp");
          console.log(response);
  
          //db me entry save krni h
          const fileData = await File.create({
              name,
              tags,
              email,
              imageUrl:response.secure_url,
          });
  
          res.json({
              success:true,
              imageUrl:response.secure_url,
              message:'Image Successfully Uploaded',
          })
      }
      catch(error) {
          console.error(error);
          res.status(400).json({
              success:false,
              message:'Something went wrong',
          });
  
      }
  }