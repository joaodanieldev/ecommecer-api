const multer = require('multer');


const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, __dirname + '/../public/images'),
  filename: (req, file, callback) => callback(null, file.fieldname + '-' + Data.now() + '.jpg')
});

const upload = multer({storage});

modules.exports = upload;