// index.js
const express = require("express");
const multer = require("multer");
const ImageController = require("./controllers/image");

const app = express();
const upload = multer({ dest: "uploads/" }); // adjust this to your needs

app.get("/images/:id", ImageController.getImage);
app.post("/images", upload.single("image"), ImageController.uploadImage);
app.delete("/images/:id", ImageController.deleteImage);

const port = process.env.IMAGES_PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
