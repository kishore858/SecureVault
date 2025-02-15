const express = require('express');
const { uploadFile, getFiles, deleteFile } = require('../controllers/fileController');
const authMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', authMiddleware, upload.single('file'), uploadFile);
router.get('/files', authMiddleware, getFiles);
router.delete('/files/:id', authMiddleware, deleteFile);

module.exports = router;
