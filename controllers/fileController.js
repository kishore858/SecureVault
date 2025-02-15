const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

const FileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    filename: { type: String, required: true },
    filepath: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now }
});

const File = mongoose.model('File', FileSchema);

exports.uploadFile = async (req, res) => {
    try {
        const file = new File({
            userId: req.user.id,
            filename: req.file.filename,
            filepath: `/uploads/${req.file.filename}`
        });

        await file.save();
        res.status(201).json({ msg: 'File uploaded successfully', file });
    } catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};

exports.getFiles = async (req, res) => {
    try {
        const files = await File.find({ userId: req.user.id });
        res.json(files);
    } catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};

exports.deleteFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        if (!file) return res.status(404).json({ msg: 'File not found' });

        await File.findByIdAndDelete(req.params.id);
        res.json({ msg: 'File deleted successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};
