const multer = require("multer");
const File = require("../models/File");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage }).single("file");

exports.uploadFile = (req, res) => {
    upload(req, res, async (err) => {
        if (err) return res.status(500).json({ message: "File Upload Failed" });

        const newFile = new File({
            user: req.user.id,
            filename: req.file.filename,
            filepath: req.file.path,
        });
        await newFile.save();
        res.json({ message: "File Uploaded Successfully", file: newFile });
    });
};
