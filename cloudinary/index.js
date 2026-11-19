const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "YelpCamp",
    allowedFormats: [
      "jpeg",
      "png",
      "jpg",
      "paint",
      "gif",
      "webp",
      "avif",
      "jxl",
      "tif",
      "tiff",
      "bmp",
      "dib",
      "heif",
      "heif",
      "heic",
      "cr2",
      "nef",
      "arw",
      "dng",
      "pcx",
      "tga",
      "pnm",
      "xcf",
      "psd",
      "ai",
      "eps",
    ],
  },
});

module.exports = {
  cloudinary,
  storage,
};
