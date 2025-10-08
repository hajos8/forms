const express = require('express')
const cors = require('cors')
const multer = require('multer')
const ftp = require('basic-ftp')

const upload = multer({dest: 'data/'})
const app = express()

const users = [
    {email: 'john@doe.com', password: 'password123'},
    {email: 'jane@doe.com', password: 'password456'}
]

app.use(cors())
app.use(express.json())

app.post('/file-upload', upload.array('file'), async (req, res) => {
    try {
        console.log('Uploaded files:', req.files)

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No files uploaded' })
        }

        const ftpClient = new ftp.Client()
        await ftpClient.access({
            host: '192.168.233.142',
            user: 'tester',
            password: 'password'
        })

        for (const file of req.files) {
            await ftpClient.uploadFrom(file.path, file.originalname)
        }

        ftpClient.close()

        res.status(200).json({ files: req.files.map(f => f.originalname) })

    } 
    catch (error) {
        console.error('File upload error:', error)
        res.status(500).json({ error: 'File upload failed: ' + error.message })
    }
})

app.post('/login', (req, res) => {
    const email = req.body.loginEmail
    const password = req.body.loginPassword

    const user = users.find(u => u.email === email && u.password === password)

    if (!user) {
        return res.status(300).json({ login: false })
    } else {
        return res.status(200).json({ login: true })
    }

})

const port = 3333

app.listen(port, err=>{
    if(err) console.warn(err)
    else console.log('fut')
})